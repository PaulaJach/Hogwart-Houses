import React from 'react';
import ParticlesContainer from './components/ParticlesContainer';
import Button from './components/Button';

import './css/App.css';




class App extends React.Component {
  render() {
    return (
      <div >
        <ParticlesContainer />
          <div className="container auto text-center">
            <div className="row App d-flex justify-content-center">
                <h1 className="col-12 py-4">Welcome to Hogwarts School of Witchcraft and Wizardry</h1>
                <h4 className="col-12">The moment of truth has come..</h4>
                <h4 className="col-12">to which of houses you will be assigned?</h4> 
                <Button />
            </div>
          </div>
        
      </div>
  
    )
  }
  
}

export default App;
