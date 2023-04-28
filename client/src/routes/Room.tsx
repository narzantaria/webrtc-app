import React, { Fragment } from "react";
import { IconButton } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export default function Room() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Fragment>
      <IconButton
        sx={{ mb: 3, fontSize: "35px", border: "1px solid #ddd" }}
        onClick={() => navigate("/")}
      >
        <AiOutlineLeft />
      </IconButton>
      {id ? <RoomContainer id={id} /> : null}
    </Fragment>
  );
}
