import React from 'react';

import logo from '../assets/y-logo.png'

class Hero extends React.Component {
    render() {
        return (
            <header className="header-hero">
                <div className="logo">
                    <img src={logo} alt="Y-logo" />
                </div>
                <div className="content container">
                    <h1>Hello! I'm Theodorus Yoga</h1>
                    <h2>Consult, Design, and Develop Websites</h2>
                    <h3>Have something great in mind? Feel free to contact me.
                        <br />
                        I'll help you to make it happen.
                    </h3>
                    <button className="btn btn-info">Let's Make Contact</button>
                </div>
            </header>
        );
    }
}

export default Hero;