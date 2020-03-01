import React from 'react';


const House = (props) => {
    if (props.house === undefined) {
        return (<div></div>)
    }

    return (
        <div className="row">
            <div className="house col-sm-12 col-md-6 col-lg-6">
                <h5>{props.house.name}</h5>
                <p>Head of House: {props.house.headOfHouse}</p>
                <p>House ghost: {props.house.houseGhost}</p>
                <p>Mascot: {props.house.mascot}</p>
            </div>
        </div>
    )
}

export default House;