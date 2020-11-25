import React from "react"
import Auxiliary from "../../../Hoc/Auxiliary"
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
    </Auxiliary>)


}
export default orderSummary