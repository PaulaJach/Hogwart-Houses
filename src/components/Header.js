import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {

    const style = {
		display: 'inline-block',
		margin: 10,
		marginBottom: 30
    };
    
    return (
        <div>    
            <h3 style={style}><Link to='/'>home</Link></h3>
            <h3 style={style}><Link to='/houses'>houses</Link></h3>
            <h3 style={style}><Link to='/teachers'>teachers</Link></h3>
            <h3 style={style}><Link to='/spells'>spells</Link></h3>
            {children}
        </div>
    )
};

export default Header;