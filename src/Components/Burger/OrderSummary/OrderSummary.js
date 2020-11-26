import React from "react"
import Auxiliary from "../../../Hoc/Auxiliary"
import Button from "../../UI/Button/Button"
const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igkey => {
        return(
        <li key = {igkey} ><span style={{ textTransform: 'capitalize'}}> {igkey}: </span>{props.ingredients[igkey]} </li>
        )
    })
    return(    <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following Ingredients: </p>
        <ul>
            {ingredients}
        </ul>
        <Button type = "Danger" clicked={props.cancelBtn}>Cancel</Button>
        <Button type = "Success" clicked={props.continueBtn}>Continue</Button>
        
        
    </Auxiliary>)


}
export default orderSummary