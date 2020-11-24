import React from "react"
import classes from "./BuildControl.module.css"
const BuildControl=(props)=>{

    return(
    <div className={classes.BuildControl}>
        {props.flag?  <button className={classes.Less} onClick={props.removeIngredientHandler} disabled >Less</button> :
                <button className={classes.Less} onClick={props.removeIngredientHandler}>Less</button>
        }
        <button className={classes.More} onClick={props.addNewIngredient} >More</button>

    </div>
    )
}
export default BuildControl
// const x=10;
// export default x;