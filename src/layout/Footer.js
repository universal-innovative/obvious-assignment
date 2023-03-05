import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

//----------images--------------//
import footerLogo from "../assets/images/obvious-squarelogo.png";

//--------------RFCE-------------------//
export default function Footer(props) {
  const navigate = useNavigate();
  const matchesPhone = useMediaQuery("(max-width: 600px)");

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <footer
      style={{
        padding: "3% 5.5% 1% 5.5%",
        backgroundColor: "#040406",
        marginTop: "2%",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Stack spacing={2}>
          <Stack>
            <Box
              onClick={handleClick}
              sx={{
                display: "flex",
                akignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img
                alt="toophaan logo"
                src={footerLogo}
                // style={{ width: `${matchesPhone ? "40%" : "30%"}` }}
              />
            </Box>
          </Stack>

          <Typography variant="subtitle1">
            2023 | All Rights Reserved @manyu
          </Typography>
        </Stack>
      </Box>
    </footer>
  );
}
