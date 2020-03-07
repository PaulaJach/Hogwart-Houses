import React from 'react';
import Spell from './Spell';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import API_KEY from '../data/apiKey';
import {DebounceInput} from 'react-debounce-input';

import '../scss/_spellsSection.scss';

class Spells extends React.Component {
    constructor() {
        super();
        
        this.state = {
            searchInput: '',
            spells: [],
            searchedSpell: false,
            foundSpells: [],
            showAutocomplete: false,   
        };

        this.inputChangeHandler = (e) => {
            this.setState({searchInput: e.target.value, showAutocomplete: true, searchedSpell: false}); 
            this.findTheSpell();
        }
        
        const HarryPotterAPIKey = API_KEY;

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

        this.onClickHandler = (e) => {
            this.findTheSpell(e.currentTarget.innerText);
            this.setState({
                searchedSpell: true, 
                searchInput: e.currentTarget.innerText,
                showAutocomplete: false,
            });  
        }    
    };

    findTheSpell(name) {
       const value = name === undefined ? this.state.searchInput : name;
        if(value.length !== 0) {
            let found = [];
            this.state.spells.find(spell => {
                if (spell.spell.toLowerCase().includes(value.toLowerCase())) {
                    found.push(spell);
                }
            });
            this.setState({foundSpells: found})
        }
    };

    render() {
        let showSuggestion;
        if(this.state.foundSpells) {
          showSuggestion = ( this.state.foundSpells.map((spell, _id) => {
                return <Spell 
                    key={spell._id} 
                    searched={this.state.searchedSpell} 
                    spell={spell.spell} 
                    effect={spell.effect} 
                    type={spell.type}/>
            })
        )
    };   
     
    return (
        <div className="spells-bg d-flex justify-content-center">
            <div className="section container d-flex-column justify-content-center">
                <h2 className="spells-title">You are in spells library !</h2>
                <form type="submit" onSubmit={this.onSubmitHandler} >
                    <DebounceInput className="spells-input"
                            type="text"
                            debounceTimeout={500}
                            value={this.state.searchInput} 
                            placeholder="search for spell..." 
                            onChange={this.inputChangeHandler}   
                    />
                    <div>
                        {
                            this.state.showAutocomplete && this.state.foundSpells.map((spell, _id) => {
                                    return <Autocomplete 
                                    key={spell._id} 
                                    effect={spell.effect} 
                                    spell={spell.spell} 
                                    clicked={this.onClickHandler}/>
                                })
                        }
                    </div>
                </form>   
                <div> 
                    { this.state.searchedSpell && showSuggestion }
                </div>
            </div>
        </div>
    )};
}
export default Spells;