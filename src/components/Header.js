import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {

    const style = {
		display: "flex",
		margin: 10,
        marginBottom: 30,
        position: "absolute",
        top: "20px",
        right: "40px",
    };

    const h3Style = {
        paddingRight: "10px",
        color: "white",
    };
    
    return (
        <div>
            <div style={style}>    
                <h3 style={h3Style}><Link className="menu-link" to='/'>home</Link></h3>
                <h3 style={h3Style}><Link className="menu-link" to='/houses'>houses</Link></h3>
                <h3 style={h3Style}><Link className="menu-link" to='/spells'>spells</Link></h3> 
            </div>
            {children}
        </div>
    );
};

export default Header;