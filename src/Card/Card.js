import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="front">
                        <div className="eng">{this.props.fin}</div>
                    </div>
                    <div className="back">
                        <div className="fin">
                            {this.props.eng}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
