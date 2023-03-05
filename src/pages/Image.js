import styled from "@emotion/styled";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../assets/images";
import MuiHidden from "../components/materialComponents/MuiHidden";
import Page from "../components/Page";
const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  height: "2rem",
  width: "2.4rem",
  minWidth: 10,
  color: theme.palette.common.red,
  backgroundColor: "rgba(50, 50, 50, .8)",
  zIndex: 120,
  opacity: 0.95,
  display: "flex",
  alignItems: "center",
  transition: "all 0.3s ease-in",
  marginRight: "10px",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.red,
    opacity: 1,
  },
}));

const Gallery = ({ index, setIndex }) => {
  const matchesPhone = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  return (
    <Page title={`${images[index]?.title}`}>
      <Box sx={{ padding: matchesPhone ? 0 : "5% 10%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            //   position: `${matchesPhone ? 'relative' : 'absolute'}`,
            //   right: 0,
            //   top: `${matchesPhone ? '8px' : '36px'}`,
            marginBottom: "32px",
            zIndex: 1,
          }}
        >
          <IconButtonStyled
            aria-label="delete"
            color="primary"
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
                window.history.replaceState(
                  null,
                  "New Page Title",
                  `/image-details/${Number(index) - 1}`
                );
              } else navigate("/");
            }}
            sx={{ borderRadius: "50% 0 0 50%" }}
          >
            <ArrowBackIos sx={{ marginLeft: "5px" }} />
          </IconButtonStyled>
          <IconButtonStyled
            aria-label="delete"
            color="primary"
            onClick={() => {
              if (index < images.length - 1) {
                setIndex(index + 1);
                window.history.replaceState(
                  null,
                  "New Page Title",
                  `/image-details/${Number(index) + 1}`
                );
              } else navigate("/");
            }}
            sx={{ borderRadius: "0 50%  50% 0" }}
          >
            <ArrowForwardIos />
          </IconButtonStyled>
        </Box>

        <Card>
          <Grid container>
            <Grid item xs={12} order={{ xs: 2, sm: 1 }}>
              {" "}
              <CardContent sx={{ backgroundColor: "common.grey" }}>
                <Typography gutterBottom variant="h4" component="div">
                  {images[index]?.title}
                </Typography>
                <Typography variant="body">
                  {images[index]?.explanation}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} order={{ xs: 1, sm: 2 }}>
              {" "}
              <CardMedia
                component="img"
                image={images[index]?.hdurl}
                alt="green iguana"
              />{" "}
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Page>
  );
};

export default Gallery;
