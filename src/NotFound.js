import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry This page not found</h2>
            <Link to='/'>Home Page</Link>
        </div>
    );
}
 
export default NotFound;