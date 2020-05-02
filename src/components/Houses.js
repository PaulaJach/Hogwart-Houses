import React from 'react';
import axios from 'axios';
import API_KEY from '../data/apiKey';
import House from './House';
import Button from './Button';
import RandomHouse from './RandomHouse';


class Houses extends React.Component {
    constructor() {
        super();
        const HarryPotterAPIKey = API_KEY;

        this.state = {
            houses: [],
            house: {},
            randomHouse: '',
            result: false,
        };

        this.onHandleClick = this.onHandleClick.bind(this);

        const getHouses = async () => {
            const response = await axios.get('https://www.potterapi.com/v1/houses', {
                params: {
                    key: HarryPotterAPIKey,   
                }
            });
            if (response.data.length !== 0) {
                this.setState({houses: response.data})
            }
        };
        getHouses();
    };

    onHandleClick() {
        const HarryPotterAPIKey = API_KEY;
        
        const randomHouse = async () => {
            const response = await axios.get('https://www.potterapi.com/v1/sortingHat', {
                params: {
                    key: HarryPotterAPIKey,
                }
            });

            if (response.data !== '') {  
                this.setState({randomHouse: response.data, result: true});
            };
        };
        randomHouse();
    };

    render() {
        let info = (<div></div>)
        if (this.state.result) {
            info =  <div>
                        <RandomHouse random={this.state.randomHouse}/>   
                    </div>
        };

        return (
            <div className="houses-bg d-flex justify-content-center">
                <div className="section text-center container d-flex-row justify-content-center align-items-center">
                        <div className="houses row text-center">
                        {  
                            this.state.houses !== undefined && this.state.houses.map((house, _id) => {
                                return (
                                   <House key={house._id} name={house.name} house={house}/>    
                                )
                            })
                        }
                        </div>
                        <Button onClick={this.onHandleClick}/> 
                        {info}
                </div>
            </div>  
        );
    }; 
};
export default Houses;