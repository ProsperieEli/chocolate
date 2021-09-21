import React, { Component } from 'react'
import Images from './Images.js'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <img src ={this.props.img} alt="" />
                <Images img= "van-pic.png" /> <strong>Vanessa Stevenson</strong>
                <p> Food enthusiast, photography fan.  Add a pinch of raw foodism and that's <br />
                    pretty much who I am. </p>
                    <button>SHARE RECIPE</button>
                    <hr />
                    Delicious © 2013 &#8226; All Rights Reserved.
                Proudly published with Ghost.
            </div>
        )
    }
}
