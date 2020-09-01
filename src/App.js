import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "sso/routes";
import { Page, PageSection } from '@patternfly/react-core';
import { Sidebar } from './components/Sidebar';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <Page sidebar={<Sidebar routes={routes} />} isManagedSidebar>
      <React.Suspense fallback={<PageSection>Loading...</PageSection>}>
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
    </Page>
  </HashRouter>
);

export default App;
