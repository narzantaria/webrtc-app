import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./routes/Room";
import Main from "./routes/Main";
import AppStyles from "./misc/AppStyles";
import { Box } from "@mui/material";
import { GREY_PAPER_COLOR } from "./misc/colors";

export default function Private() {
  return (
    <Box sx={{ backgroundColor: GREY_PAPER_COLOR }}>
      <Box
        sx={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "665px",
          minHeight: "100vh",
          backgroundColor: "#FFF",
          overflow: "hidden",
        }}
      >
        <AppStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/room/:id" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
