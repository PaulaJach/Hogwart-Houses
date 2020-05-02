import React from 'react';
import ParticlesContainer from './components/ParticlesContainer';
import Button from './components/Button';

import './scss/App.scss';




class App extends React.Component {
  render() {
    return (
      <div className="landing-page" >
        <ParticlesContainer />
          <div className=" d-flex justify-content-center">
            <div className="container row App d-flex justify-content-center">
                <h1 className="col-12 py-4">Welcome to Hogwarts School of Witchcraft and Wizardry</h1>
                <h4 className="col-12">The moment of truth has come..</h4>
                <h4 className="col-12 mb-3">to which of houses you will be assigned?</h4> 
                <Button />
            </div>
          </div>
      </div>
    );
  };
};

export default App;
