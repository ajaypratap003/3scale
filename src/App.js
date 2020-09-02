import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import localRoutes from "./routes";
import Page from './components/Page';

export const routes = localRoutes;

const App = () => (
  <HashRouter>
    <Page>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route
            key={path}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </Page>
  </HashRouter>
);

export default App;
