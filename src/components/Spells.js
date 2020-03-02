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
            searchedSpell: false,
            foundSpells: [],
        };

        this.inputChangeHandler = (e) => {
            // const value = e.target.value;
            this.setState({searchInput: e.target.value}); 
            this.findTheSpell();
            // if(value.length !== 0) {
            //     let found = [];
                
            //     this.state.spells.find(spell => {
            //         if (spell.spell.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
            //             found.push(spell);
            //         }
            //     });
    
            //     this.setState({foundSpells: found})
            //     if(found !== []) {
            //         this.setState({searchedSpell: true});
            //     }
            // } else {
            //     this.setState({foundSpells: []});
            // }
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

        this.onClickHandler = (e) => {
            this.findTheSpell(e);

            this.setState({
                searchedSpell: true, 
                searchInput: e.currentTarget.innerText,
                searchedSpell: true,
                foundSpells: []
            });
        }
    }


    findTheSpell() {
       const value = this.state.searchInput
        if(value.length !== 0) {
            let found = [];
            
            this.state.spells.find(spell => {
                if (spell.spell.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
                    found.push(spell);
                }
            });
            
            this.setState({foundSpells: found})
            if(found !== []) {
                this.setState({searchedSpell: true});
            }
        } else {
            this.setState({foundSpells: []});
        }
    }

    render() {
        
        return (
            <div className="container">
                <div className="section">
                    <h3>You are in spells liblary !</h3>

                    <form type="submit" onSubmit={this.onSubmitHandler} >
                        <DebounceInput className="input"
                            type="text"
                            debounceTimeout={500}
                            value={this.state.searchInput} 
                            placeholder="search for spell..." 
                            onChange={this.inputChangeHandler}
                            
                        />
                       
                        {
                            this.state.foundSpells.map((spell, _id) => {
                                return <Autocomplete key={spell._id} effect={spell.effect} spell={spell.spell} clicked={this.onClickHandler}/>
                            })
                        }
                       
                    </form>
                        
                    <div>
                      
                    
                    {  
                        // this.state.spells !== undefined && this.state.spells.map((spell, _id) => {
                        //     return (
                        //         <Spell key={spell._id} type={spell.type} spell={spell.spell} effect={spell.effect}/> 
                                   
                        //     )
                        // })
                    }
                    {/* <Spell serched={this.state.searchedSpell} key={spell._id} effect={spell.effect} show={() => this.showSearchedSpell}/> */}
                    </div>
                    
                </div>
            </div>
            
        )
    }
}
export default Spells;