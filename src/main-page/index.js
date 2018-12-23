import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";

class App extends Component {
  state = {}

  componentDidMount(){
    this.fetchHouses();
  }

  fetchHouses = () =>{
    fetch('./houses.json')
    .then(rsp=> rsp.json())
    .then(allHouses =>{
      this.allHouses = allHouses;
      this.determineHouse();
    })
  };

  determineHouse = () =>{
    if(this.allHouses){
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      console.log(randomIndex);
      const featuredHouse = this.allHouses[randomIndex];
      console.log(featuredHouse);
      this.setState({featuredHouse});
    }

  }

  render() {
    return (
      <div className="container">
        <Header title="you will get ur dreamwear here"/>
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
