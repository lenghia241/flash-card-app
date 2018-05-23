import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';

import {DB_CONFIG } from './config/Firebase/db_config';

class App extends Component {

  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database=this.app.database().ref().child('cards');

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        eng: snap.val().eng,
        fin: snap.val().fin
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(this.state.cards)
      });
      
    })
    
  }

  getRandomCard = (cards) => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    return (card);
  }

  updateCard = () => {
    const cards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(cards),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            eng={this.state.currentCard.eng}
            fin={this.state.currentCard.fin}
           />
        </div>
        <div className="buttonRow">
          <DrawButton drawcard = {this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
