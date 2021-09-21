import React, { Component } from 'react'
import Images from './components/Images.js'
import Header from './components/Header.js'
import './App.css'
import Title from './components/Title.js'
import Footer from './components/Footer.js'
import IngredientList from './components/IngredientList.js'
import Text from './components/Text.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Title /> 
          <Header /> 
          <hr />
        <Images />
        <Text />
        <IngredientList />
      <Footer />
      </div>
    )
  }
}

