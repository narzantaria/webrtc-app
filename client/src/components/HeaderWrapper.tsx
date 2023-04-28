import {
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { ReactNode } from "react";
import { PAPER_COLOR } from "../misc/colors";
import {
  AiOutlineBell,
} from "react-icons/ai";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: PAPER_COLOR,
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
}
