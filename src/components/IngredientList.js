import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'
export default class IngredientList extends Component {
    render() {
        return (
            <div>
                <IngredientItem amount="1/2 cups" name=" milk" />
                <IngredientItem amount="1/2 cup" name=" marscapone" />
                <IngredientItem amount="1/2 tsp " name=" pink salt" />
                <IngredientItem amount="1 lb" name=" Black Mission Figs" />
                <IngredientItem amount="1/2 cup" name=" brown sugar" />
                <IngredientItem amount="2-4 tbsp" name=" water" />
                <IngredientItem amount="1/2 cups " name=" heavy cream" />
                <IngredientItem amount="1/3" name=" granulated sugar" />
                <IngredientItem amount="2" name=" egg yolks" />
                <IngredientItem amount="1 lemon," name=" juiced" />
                <IngredientItem amount="2 tbsp" name=" butter" />
                <IngredientItem amount="1 cup" name=" honey roasted pecans, roughly chopped" />
            </div>
        )
    }
}
