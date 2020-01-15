import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';

import { Hello } from './components/Hello';
import LandingPage from './pages/landing';
import OtherPage from './pages/other';

class App extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/'}>
                  <LandingPage />
                </Route>
                <Route exact={true} path={'/other'}>
                  <OtherPage />
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
