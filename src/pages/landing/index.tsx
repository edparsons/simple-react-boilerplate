import * as React from 'react';
import { Link } from 'react-router-dom';

import { Hello } from '../../components/Hello';

class Landing extends React.Component {
    render() {
        return (
            <>
              <Hello compiler='TypeScript' framework='React' />
              <Link to='/other'>Other</Link>
            </>
        );
    }
}
export default Landing;
