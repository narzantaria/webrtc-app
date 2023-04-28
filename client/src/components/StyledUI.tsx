import { IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { BROWN_COLOR } from "../misc/colors";

const VITE_API = import.meta.env.VITE_API;

export const StyledLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const Image = styled("div")`
height: 100%;
transition: 0.3s ease-in-out;
position: absolute;
width: 100%;
left: 0;
top: 0;
background: ${({ img }: { img?: string }) => `url(${VITE_API}/dist/${img}) no-repeat center center / cover`};
`;

export const Border = styled("div")`
overflow: hidden;
padding-bottom: ${({ pb }: { pb?: string }) => pb || "100%"};
position: relative;
`;

export const BigIcon = styled(IconButton)`
padding: 0;
svg {
  font-size: 55px;
  color: ${({ clr }: { clr?: string }) => clr || BROWN_COLOR};
}
`;

export const CallBtn = styled("div")`
cursor: pointer;
svg {
  font-size: 65px;
  color: #d21312;
}
`;