import React from "react";

const ApiManager = React.lazy(() => import("./pages/ApiManager"));
const Secure = React.lazy(() => import("./pages/produce/secure"));

const routes = [
  {
    path: "/",
    text: "Dashboard",
    component: ApiManager,
    exact: true
  },
  {
    path: "/produce/design",
    section: 'produce',
    text: "Design",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/produce/mock",
    section: 'produce',
    text: "Mock",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/produce/test",
    section: 'produce',
    text: "Test",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/produce/implement",
    section: 'produce',
    text: "Implement",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/produce/deploy",
    section: 'produce',
    text: "Deploy",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/produce/secure",
    section: 'produce',
    text: "Secure",
    component: Secure,
    exact: true
  },
  {
    path: "/produce/manage",
    section: 'produce',
    text: "Manage",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/consume/discover",
    section: 'consume',
    text: "Discover",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/consume/develop",
    section: 'consume',
    text: "Develop",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/consume/consume",
    section: 'consume',
    text: "Comsume",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/consume/monitor",
    section: 'consume',
    text: "Monitor",
    component: () => 'Nothing yet',
    exact: true
  },
  {
    path: "/consume/monetize",
    section: 'consume',
    text: "Monetize",
    component: () => 'Nothing yet',
    exact: true
  },
];

export default routes;
