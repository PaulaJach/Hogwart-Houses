import React from 'react';

import '../scss/_spellsSection.scss';

const Autocomplete = (props) => {
    if (props.spell === undefined) {
        return (<div></div>)
    }
    return (
        <div className="autocompleteContainer text-center">
            <ul className="listItems text-center">
                <li className="listItem" onClick={props.clicked}>
                    <p>{props.spell}</p>
                </li> 
            </ul>
        </div>
    );
};

export default Autocomplete;