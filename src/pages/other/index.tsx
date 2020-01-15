import * as React from 'react';
import { Link } from 'react-router-dom';

class Other extends React.Component {
    render() {
        return (
            <>
              Other Page
              <Link to='/'>Landing</Link>
            </>
        );
    }
}
export default Other;
