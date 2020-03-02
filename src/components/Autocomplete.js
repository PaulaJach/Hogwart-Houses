import React from 'react';

const Autocomplete = (props) => {
    
    return (
        <div>
            <h5>Name of spell: {props.spell}</h5>
            <h6>Type of spell: {props.type}</h6>
        </div>
    );
};

export default Autocomplete;