import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "sso/routes";

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
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
  </HashRouter>
);

export default App;
