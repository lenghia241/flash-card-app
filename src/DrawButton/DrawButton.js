import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component {
    // constructor(props) {
    //     super(props);
    // }

    drawCard = () => {
        this.props.drawcard();
    }

    render() {
        return (
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Draw Card</button>
            </div>
        );
    }
}

export default DrawButton;
