import React from "react";

const AboutPage = React.lazy(() => import("./pages/About"));

const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
];

export default routes;
