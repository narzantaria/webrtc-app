import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export default function MainBox({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {children}
    </Box>
  );
}
