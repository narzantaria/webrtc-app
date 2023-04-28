import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export default function TopNav({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", pl: 1 }}>
      {children}
    </Box>
  );
}
