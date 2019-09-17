import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./index";

class Routers extends React.Component {

  render() {
      return (
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index.toString()}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
      );
  }
}

export default Routers;
