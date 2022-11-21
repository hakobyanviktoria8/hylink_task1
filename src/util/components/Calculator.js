import React, { useState } from 'react'

function Calculator() {
    const [fruit, setFruit] = useState("grapefruit");
    const [type, setType] = useState("hight");
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0)

    const goods = {
      grapefruit:{
        hight: 500,
        medium:300,
        low: 100
      }, 
      lime:{
        hight: 500,
        medium:300,
        low: 100
      },
      coconut:{
        hight: 500,
        medium:300,
        low: 100
      },
      mango:{
        hight: 500,
        medium:300,
        low: 100
      }
    }

    const handleChangeFruit =(e)=> {
        setFruit(e.target.value)
    }

    const handleChangeType =(e)=> {
      setType(e.target.value)
    }

    const calcGoods = () => {
      setPrice(goods[fruit][type] * count)
    }

  return (
    <div>
      <h2>You choose: {fruit} {type} type and {count} kg, which coast: {price}</h2>
        <select value={fruit} onChange={handleChangeFruit}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
        <select value={type} onChange={handleChangeType}>
            <option value="hight">Hight</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <input value={count} type="number" placeholder='kg' onChange={(e) => setCount(e.target.value)}/>
        <button onClick={calcGoods}>Calculate</button>
    </div>
  )
}

export default Calculator