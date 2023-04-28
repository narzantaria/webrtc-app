import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { io } from "socket.io-client";
import { XButton1 } from "./Buttons";
import { rtcConfig } from "../../rtcConfig";

interface Signal {
  operation: "join" | "offer" | "answer" | "ice";
  source?: string;
  target: string;
  data?: any;
}

const VITE_SOCK_API = import.meta.env.VITE_SOCK_API;

const socket = io(VITE_SOCK_API);

const peerConnection = new RTCPeerConnection(rtcConfig);

export default function RoomContainer({ id }: { id: string }) {
  const remoteRef = useRef<HTMLVideoElement>(null);
  const [message, setMessage] = useState<string>("");
  const [value, setValue] = useState<string>("");

  async function call() {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    const mySignal: Signal = {
      operation: "offer",
      source: id,
      target: value,
      data: offer,
    };
    socket.emit("server", mySignal);
  }

  useEffect(() => {
    // VIDEO!!!
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        // Join
        const mySignal: Signal = { operation: "join", target: id };
        socket.emit("server", mySignal);

        stream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, stream);
        });

        // Incoming sockets
        socket.on(id, async (arg: Signal) => {
          // Incoming offer
          if (arg.operation === "offer" && arg.source) {
            peerConnection.setRemoteDescription(
              new RTCSessionDescription(arg.data)
            );
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            const mySignal: Signal = {
              operation: "answer",
              source: id,
              target: arg.source,
              data: answer,
            };
            socket.emit("server", mySignal);
          }
          // Recieve an answer
          if (arg.operation === "answer") {
            const remoteDesc = new RTCSessionDescription(arg.data);
            await peerConnection.setRemoteDescription(remoteDesc);
          }
          // Ice candidate
          if (arg.operation === "ice") {
            try {
              const candidate = new RTCIceCandidate(arg.data); // ??????
              await peerConnection.addIceCandidate(candidate);
            } catch (e) {
              console.error("Error adding received ice candidate", e);
            }
          }
        });
      });
  }, []);

  peerConnection.addEventListener("track", async (event) => {
    const [remoteStream] = event.streams;
    if (remoteRef.current) remoteRef.current.srcObject = remoteStream;
  });

  // Listen for local ICE candidates on the local RTCPeerConnection
  peerConnection.addEventListener("icecandidate", (event) => {
    console.log(event.candidate);
    if (event.candidate) {
      const mySignal: Signal = {
        operation: "ice",
        source: id,
        target: value,
        data: event.candidate,
      };
      socket.emit("server", mySignal);
    }
  });

  // Listen for connectionstatechange on the local RTCPeerConnection
  peerConnection.addEventListener("connectionstatechange", (event) => {
    if (peerConnection.connectionState === "connected") {
      setMessage("Peers connected!");
    }
  });

  return (
    <Fragment>
      <Card>
        <CardHeader
          title="Connect and open media channel"
          sx={{ borderBottom: "1px solid #ddd" }}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              sx={{
                cursor: "pointer",
                border: "1px solid #ddd",
                borderRadius: "5px",
                p: 2,
              }}
              onClick={() => {
                if (id) {
                  navigator.clipboard.writeText(id);
                  setMessage("Copied");
                }
              }}
            >
              {id}
            </Typography>
            <TextField
              label="Connect other client"
              variant="outlined"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
            <XButton1
              onClick={async () => {
                // offer
                if (id && value) call();
              }}
            >
              Connect
            </XButton1>
            <Box sx={{ width: "100%", pb: "65%", position: "relative", border: '1px solid #ddd' }}>
              <video
                ref={remoteRef}
                autoPlay
                playsInline
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Snackbar
        open={Boolean(message.length)}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={message}
      />
    </Fragment>
  );
}
