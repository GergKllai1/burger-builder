import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price <strong>{props.totalPrice.toFixed(2)} $</strong></p>
      {controls.map(ctrl => {
          return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          ingredientAdded={()=> props.ingredientAdded(ctrl.type)} 
          ingredientRemoved={()=> props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]} 
          />
      })}
    </div>
  )
}

export default BuildControls
