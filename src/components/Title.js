import React, { Component } from 'react'
import  Images from './Images.js' 
export default class Title extends Component {
    render() {
        return (
            <div>
            <img className="logo" src ={this.props.img} alt="" />
            <Images img="small-logo.png" />
            Delicious.
            The Best Food Blog on The Web!
            </div>
        )
    }
}
