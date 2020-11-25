import React from "react"
import classes from "./BuildControl.module.css"
const BuildControl=(props)=>{

    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removeIngredientHandler} disabled={props.disabledInfo} >Less</button>
        <button className={classes.More} onClick={props.addNewIngredient} >More</button>

    </div>
    )
}
export default BuildControl
// const x=10;
// export default x;