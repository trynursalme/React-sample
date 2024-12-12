/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
        <>
        <div className="single-food">
          <div className="img">
            <img
              src={this.props.img}
            />
          </div>
          <div className="title-price">

            <h3>{this.props.title}</h3>
            
            <p>{this.props.price}</p>
            <p>{this.props.category}</p>
          </div>
          <div className="food-desc">
            {this.props.desc}
          </div>
        </div>
        </>
    )
  }
}

export default Card