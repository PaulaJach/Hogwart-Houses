import React from 'react';

import '../scss/_spellsSection.scss';

const Spell = (props) => {
    if (props.spell === undefined) {
        return (<div></div>)
    }
    return (
        <div className="spells-description mt-5 py-5">{props.searched}
            <h6>name of spell:</h6> 
            <h4>{props.spell}</h4>
            <h6>type of spell:</h6>
            <h5> {props.type}</h5>
            <h6>effect:</h6> 
            <h5>{props.effect}</h5>
        </div>
    );
};
export default Spell;