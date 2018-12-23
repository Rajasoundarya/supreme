import React, { Component } from 'react';

class house extends Component{
  state = {}
  render(){
    const house = this.props.house;
    return (
      <div>
        <div className="row mt-2">
        <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row mt-2">
        <h5 className="col-md-12">{house.address}</h5>
        </div>
        <div className="row mt-2">
        <h5 className="col-md-12">{house.price}</h5>
        </div>
        <div className="row mt-2">
        <h5 className="col-md-12">{house.description}</h5>
        </div>
      </div>
    )
  }
}

export default house;