import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

// Routes

const MainLayout = React.lazy(() => import("./layout/MainLayout"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Image = React.lazy(() => import("./pages/Image"));

// -------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Gallery /> },
        {
          path: `image-details/:id`,
          element: <Image />,
        },
      ],
    },
  ]);
}
