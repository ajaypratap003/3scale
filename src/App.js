import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import Page from 'navigation/Page';
import routes from "navigation/routes";
import SidebarContext from 'navigation/sidebarContext';

const App = () => {
  const [apiName, setApiName] = React.useState(null);
  
  console.log('routes', routes);

  return (
    <HashRouter>
      <SidebarContext.Provider value={{ apiName, setApiName }}>
        <Page>
          <Switch>
            {routes.map(({ path, component: Component, exact }) => (
              <Route
                key={path}
                path={path}
                component={() => <Component apiName={apiName} setApiName={setApiName} />}
                exact={exact}
              />
            ))}
          </Switch>
        </Page>
      </SidebarContext.Provider>
    </HashRouter>
  );
}

export default App;
