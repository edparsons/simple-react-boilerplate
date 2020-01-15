import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';

const theme = {
    colors: {
        primary: 'hotpink',
    },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <React.Fragment>
          <Router>
            <App />
          </Router>
      </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
