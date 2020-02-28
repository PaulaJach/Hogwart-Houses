import React from 'react';
import axios from 'axios';
import House from './House';
import Button from './Button';
import RandomHouse from './RandomHouse';

import '../css/App.css';

class Houses extends React.Component {
    constructor() {
        super();
        const HarryPotterAPIKey = '$2a$10$xuF.aQwUrwwwEzH9qqYId.ugE651f2d42XaYUvKOVX8wLvFN1.Zy.';

        this.state = {
            houses: [],
            house: {},
            randomHouse: '',
            result: false
        }

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
            
           console.log(response.data);

        };
        getHouses();
    };

    onHandleClick() {
        console.log(this.state)
        console.log('clicked button');
        const HarryPotterAPIKey = '$2a$10$xuF.aQwUrwwwEzH9qqYId.ugE651f2d42XaYUvKOVX8wLvFN1.Zy.';
        
        const randomHouse = async () => {
            const response = await axios.get('https://www.potterapi.com/v1/sortingHat', {
                params: {
                    key: HarryPotterAPIKey,
                }
            });

        console.log(response.data);
            if (response.data !== '') {
                
            this.setState({randomHouse: response.data, result: true});
              
            };
            
        };
        randomHouse();
    };

    render() {
        let info = (<div></div>)
        if (this.state.result) {
            info = <div>
                
                <RandomHouse random={this.state.randomHouse}/> 
                
            </div>
        }

        return (
            
            <div className="container">
                <div className="housesSection">
                        <div className="text-center d-flex">
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
        )
    }  
}
export default Houses;