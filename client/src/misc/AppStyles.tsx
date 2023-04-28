import React from "react";
import { GlobalStyles } from "@mui/material";

export default function AppStyles() {
  return (
    <GlobalStyles
      styles={{
        "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')":
          true,
        body: { margin: 0, fontFamily: "Open Sans, sans-serif !important" },
        "*, ::before, ::after": { boxSizing: "border-box" },
        "button, h1, h2, h3, h4, h5, h6": {
          fontFamily: "Inter, sans-serif !important",
        },
        a: {
          color: "initial",
          textDecoration: "none",
        },
      }}
    />
  );
}
