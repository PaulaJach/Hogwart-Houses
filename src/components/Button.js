import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to='/houses'>
            <button onClick={props.onClick} className="btn btn-dark btn-landing_page my-2">Check</button>
        </Link>
    )
}
export default Button;