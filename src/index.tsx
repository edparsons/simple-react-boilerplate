import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';


import App from './App';

const muiTheme = createMuiTheme({});

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
      <React.Fragment>
          <Router>
            <App />
          </Router>
      </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('root')
);
