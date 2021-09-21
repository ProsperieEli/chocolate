import React, { Component } from 'react'
import Images from './Images.js'
export default class Header extends Component {
    render() {
        return (
            <div className="toolbar">
                <img src ={this.props.img} alt="" />
                <Images img= "fb-icon.png"></Images>
                <Images img="flic-icon.png"></Images>
                <Images img="gp-icon.png"></Images>
                <Images img="hr-img.png"></Images>
                <Images img="insta-icon.png"></Images>
                <Images img="mail-icon.png"></Images>
                <Images img="pint-icon.png"></Images>
                <Images img="rss-icon.png"></Images>
                <Images img="twit-icon.png"></Images>
                
            </div>
        )
    }
}
