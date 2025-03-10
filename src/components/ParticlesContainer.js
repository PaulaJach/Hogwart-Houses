import React from 'react';
import Particles from 'react-particles-js';


const ParticlesContainer = () => {
    return (     
        <Particles params = {
            {
                "particles": {
                    "number": {
                        "value": 180,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 2,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                },
               


            }
        }
        style = {{
            "height": "100%",
            "width": "100%",
            "position": "absolute",
            "zIndex": 20,
            "padding": 0,
            "margin": 0
        }
    } />
       
    )
}

export default ParticlesContainer;