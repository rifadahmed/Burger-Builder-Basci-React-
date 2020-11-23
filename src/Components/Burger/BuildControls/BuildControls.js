import React from "react"
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"
const items=[
    {label:"Meat", type:"meat"},
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"}
]
const buildControls=()=>(
    <div className={classes.BuildControls}>
        {items.map((item)=>{
            return<BuildControl key={item.type} label={item.label} />
        }  
        )}
    </div>
)
export default buildControls