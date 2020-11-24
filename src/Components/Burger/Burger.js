import React from "react"
import Ingredients from "./BurgerIngredients/burgerIngredients"
import classes from "./Burger.module.css"
const Burger=(props)=>{
    // const ar1=[...Array(3)]
    // ar1.push("bye")
    // const ar2=Array(4)
    // ar2.push("hello")
    // console.log(ar1)
    // console.log(ar2)
    const transformedIngredients=Object.keys(props.ingredients).map(igKey=>{
        return(
            [...Array(props.ingredients[igKey])].map((_,i)=>{
                return(
                    <Ingredients key={igKey + i} type={igKey}/>
                )
                

            })
        )
            //reduce method helps flat the array
    }).reduce((accumulator,item)=>{
        return accumulator.concat(item)
    })




        return(
            <div className={classes.Burger}>
            <Ingredients type="bread-top"/>
            {/* <Ingredients type="meat"/>
            <Ingredients type="salad"/>
            <Ingredients type="bacon"/> */}
            {transformedIngredients.length? transformedIngredients : <p>Add Some ingredients</p>}
            <Ingredients type="bread-bottom"/>
            
            </div>
        )


}
export default Burger