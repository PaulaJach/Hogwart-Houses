import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to='/houses'><button onClick={props.onClick} className="btn btn-dark my-4">Check</button></Link>
    )
}
export default Button;