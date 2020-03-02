import React from 'react';

const Autocomplete = (props) => {
    if (props.spell === undefined) {
        return (<div></div>)
    }
    return (
        <div className="autocompleteContainer">
            <ul className="listItems">
                <li className="listItem" onClick={props.clicked}>
                    <p>{props.spell}</p>
                </li> 
            </ul>
        </div>
    );
};

export default Autocomplete;