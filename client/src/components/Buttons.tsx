import { Button, styled } from "@mui/material";
import { BROWN_COLOR } from "../misc/colors";

const XButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 600,
  padding: "10px 20px",
  width: "max-content",
  borderRadius: "5px",
  borderWidth: "2px",
  borderStyle: "solid",
  transition: ".3s ease-in-out",
}));

export const XButton1 = styled(XButton)(() => ({
  borderColor: BROWN_COLOR,
  backgroundColor: BROWN_COLOR,
  "&:hover": { color: BROWN_COLOR },
}));

export const XButton2 = styled(XButton)(() => ({
  borderColor: BROWN_COLOR,
  color: BROWN_COLOR,
  background: "transparent",
  "&:hover": {
    color: "#fff",
    backgroundColor: BROWN_COLOR,
  },
}));
