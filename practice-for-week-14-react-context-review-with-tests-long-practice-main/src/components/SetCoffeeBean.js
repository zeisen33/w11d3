import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const {setCoffeeBeanId} = useContext(CoffeeContext);

  const handleChange = (id) => {
    console.log(id)
    setCoffeeBeanId(id) 
    
  };

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean" 
        onChange={handleChange}>
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
            >
      
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;