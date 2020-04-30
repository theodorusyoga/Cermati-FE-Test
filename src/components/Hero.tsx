import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';

import logo from '../assets/y-logo.png'

const mapStateToProps = ({ main }: IRootState) => {
    const { name } = main;
    return { name };
}

type ReduxType = ReturnType<typeof mapStateToProps>

class Hero extends React.Component<ReduxType> {
    render() {
        const { name } = this.props;
        return (
            <header className="header-hero">
                <div className="logo">
                    <img src={logo} alt="Y-logo" />
                </div>
                <div className="content container">
                    <h1>Hello! I'm {name}</h1>
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

export default connect(mapStateToProps)(Hero);