import React from 'react';

const Spell = (props) => {
    if (props.spell === undefined) {
        return (<div></div>)
    }
    return (
        <div >{props.searched}
            <h5>Name of spell: {props.spell}</h5>
            <h6>Type of spell: {props.type}</h6>
            <p>meaning of spell: {props.effect}</p>
        </div>
    )
}
export default Spell;