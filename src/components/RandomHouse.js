import React from 'react';

const RandomHouse = (props) => {
    if (props.random === undefined) {
        return (<div></div>)
    }
    return (
        <div>
            <h3>Congratulations!</h3>
            <h4><b>You have been assigned to {props.random} House</b></h4>
        </div>
    )
}

export default RandomHouse;