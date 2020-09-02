import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import localRoutes from "./routes";
import { Page, PageSection } from '@patternfly/react-core';
import PageHeader from './components/PageHeader';
import Sidebar from './components/Sidebar';

const routes = [...localRoutes];

const App = () => (
  <HashRouter>
    <Page sidebar={<Sidebar routes={routes} />} header={<PageHeader />} isManagedSidebar>
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
