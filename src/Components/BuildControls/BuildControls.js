import React from "react"
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"
const items=[
    {label:"Meat", type:"meat"},
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"}
]
const buildControls = (props)=>{
  
    return(
    <div className = {classes.BuildControls}>
         <p className="">Burger Price: <strong className="">{props.price.toFixed(2)}</strong></p>
        {items.map((item)=>{

            return <BuildControl key={item.type} label={item.label} 
            addNewIngredient={()=>props.addNewIngredient(item.type)}
            removeIngredientHandler={()=>props.removeIngredientHandler(item.type)}
            disabledInfo={props.disabledInfo[item.type]}
             />
        }  
        )}

        <button className={classes.OrderButton}
         disabled={!props.purchasable}
         onClick={props.orderButtonHandler} >ORDER NOW!</button>

    </div>
    )
}
export default buildControls