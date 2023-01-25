import CoffeeProvider from "../context/CoffeeContext";
import CoffeeContext from "../context/CoffeeContext"
import { createContext, useState, useContext } from 'react'


const SelectedCoffeeBean = () => {
  const { coffeeBean } = useContext(CoffeeContext)

  return (
    <div className="selected-coffee"> 
      <h2>{coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;