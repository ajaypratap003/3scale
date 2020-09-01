import React from "react";

const ApiManager = React.lazy(() => import("./pages/ApiManager"));
const Integration = React.lazy(() => import("./pages/Integration"));

const routes = [
  {
    path: "/api-manager",
    text: "API Manager",
    component: ApiManager,
    exact: true
  },
  {
    path: "/integration",
    text: "Integration",
    component: Integration,
    exact: true
  },
];

export default routes;
