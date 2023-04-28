import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        width: "100%",
        height: "100%",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}
