import React from 'react';

const RandomHouse = (props) => {
    if (props.random === undefined) {
        return (<div></div>)
    }
    
    return (
        <div className="mt-4 random-house">
            <h3>Congratulations!</h3>
            <h4>You have been assigned to {props.random} House</h4>
        </div>
    )
}

export default RandomHouse;