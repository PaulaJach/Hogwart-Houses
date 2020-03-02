import React from 'react';
import Spell from './Spell';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';

class Spells extends React.Component {
    constructor() {
        super();
        
        this.state = {
            searchInput: '',
            spells: [],
            oneSpell: {},
            autocomplete: false
        };

        this.inputChangeHandler = e => {
            const value = e.target.value;
            this.setState({searchInput: value}); 
            console.log(value);
        }
        

        const HarryPotterAPIKey = '$2a$10$xuF.aQwUrwwwEzH9qqYId.ugE651f2d42XaYUvKOVX8wLvFN1.Zy.';

        const getSpells = async () => {
            const response = await axios.get('https://www.potterapi.com/v1/spells', {
                params: {
                    key: HarryPotterAPIKey,            
                }
            });
                
           
            if (response.data.length !== 0) {
                this.state.spells = response.data    
            }    
        };

        getSpells();

        this.onSubmitHandler = (e) => {
            e.preventDefault();
            if (this.state.spells.length !== 0) {
                let found = []
                this.state.spells.find(spell => {
                    if (spell.spell.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
                        found.push(spell);
                    }
                })

                console.log(found);
              
            } 
        }
    }
    render() {
        return (
            
            <div className="container">
                <div className="section">
                    <h3>You are in spells liblary !</h3>

                    <form type="submit" onSubmit={this.onSubmitHandler}>
                        <DebounceInput 
                        debounceTimeout={800}
                        value={this.state.searchInput} 
                        placeholder="search for spell..." 
                        onChange={this.inputChangeHandler}
                         />
                    </form>

                    <div>
                    {  
                        // this.state.spells !== undefined && this.state.spells.map((spell, _id) => {
                        //     return (
                        //         <Spell key={spell._id} type={spell.type} spell={spell.spell} effect={spell.effect}/> 
                                   
                        //     )
                        // })
                    }
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Spells;