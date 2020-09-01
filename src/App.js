import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import TopNav from "app1/TopNav";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "app1/routes";

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <div>
      <h1>This is 3scale</h1>
      <TopNav />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </HashRouter>
);

export default App;
