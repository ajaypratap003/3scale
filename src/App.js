import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import Page from 'navigation/Page';
import routes from "navigation/routes";
import PageContext from 'navigation/PageContext';

const App = () => {
  const [apiName, setApiName] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  console.log('routes', routes);
  console.log('isAuthenticated', isAuthenticated);

  return (
    <HashRouter>
      <PageContext.Provider value={{ apiName, isAuthenticated }}>
        <Page>
          <Switch>
            {routes.map(({ path, component: Component, exact }) => (
              <Route
                key={path}
                path={path}
                component={() => <Component
                  apiName={apiName}
                  setApiName={setApiName}
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />}
                exact={exact}
              />
            ))}
          </Switch>
        </Page>
      </PageContext.Provider>
    </HashRouter>
  );
}

export default App;
