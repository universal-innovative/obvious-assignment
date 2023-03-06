import { Masonry } from "@mui/lab";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import { images } from "../assets/images";
import Page from "../components/Page";

const Gallery = ({ setIndex, index }) => {
  const matchesIPhone = useMediaQuery("(max-width: 400px)");
  const matchesIPad = useMediaQuery("(max-width: 720px)");
  return (
    <Page title="NASA APOD | Gallery">
      <Box sx={{ padding: "3%" }}>
        {" "}
        <Masonry
          columns={matchesIPhone ? 1 : matchesIPad ? 2 : 3}
          spacing={matchesIPhone ? 1.5 : matchesIPad ? 2 : 3}
        >
          {images
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item, i) => (
              <div key={i}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setIndex(i);
                    window.history.replaceState(
                      null,
                      "New Page Title",
                      `/image-details/${i}`
                    );
                  }}
                >
                  {/* <Label>{index + 1}</Label> */}
                  <img
                    src={`${item.url}?w=162&auto=format`}
                    srcSet={`${item.url}?w=162&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </Box>
              </div>
            ))}
        </Masonry>
      </Box>
    </Page>
  );
};

export default Gallery;
