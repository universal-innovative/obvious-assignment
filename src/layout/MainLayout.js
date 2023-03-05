import * as React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
// Components

import Footer from "./Footer";
import Loader from "../components/lotte/Loader";
const Gallery = React.lazy(() => import("../pages/Gallery"));
const Image = React.lazy(() => import("../pages/Image"));
export default function HideAppBar() {
  const matchesPhone = useMediaQuery("(max-width: 600px)");
  const [index, setIndex] = React.useState(null);

  React.useEffect(() => {
    const idx =
      window?.location?.pathname.split("/")[
        window?.location?.pathname.split("/").length - 1
      ];
    setIndex(idx);
  }, [window?.location?.pathname]);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          minHeight: "100vh",
        }}
      >
        <Typography
          sx={{ margin: matchesPhone ? "1rem auto" : "3rem auto" }}
          variant={matchesPhone ? "h2" : "h1"}
        >
          NASA APOD
        </Typography>

        <React.Suspense fallback={<Loader />}>
          {!window.location.pathname.includes("image-details") ? (
            <Gallery index={index} setIndex={setIndex} />
          ) : (
            <Image index={index} setIndex={setIndex} />
          )}
        </React.Suspense>
        <Footer
          sx={{
            marginTop: "auto",
          }}
        />
      </Box>
    </React.Fragment>
  );
}
