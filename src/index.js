import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./config/routes";
import {BaseCSS, GridThemeProvider} from "styled-bootstrap-grid";
import '../src/normalize.css';
import {Provider} from "react-redux";
import store from '../src/redux/store'

const styledTheme = {
  mainColor: 'grey',
}

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <BaseCSS/>
        <ThemeProvider
            theme={styledTheme}
        >
          <GridThemeProvider
          >
            <Router>
              <Switch>
                { routes.map(({ path, Component }, key) => (
                    <Route exact path={path} key={key} component={Component} />
                ))}
              </Switch>
            </Router>
          </GridThemeProvider>
        </ThemeProvider>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

