import React,{Component} from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"
const INGReDIENT_PRICES={
    meat:2,
    salad:0.75,
    bacon:0.5,
    cheese:1.75
}
class Burgerbuilder extends Component {
    state={
        ingredients:{
            meat:0,
            salad:0,
            cheese:0,
            bacon:0
        },
        price:4,
        flag:true
    }
   addIngredientHandler=(type)=>{

       const oldCount=this.state.ingredients[type]
       const newCount=oldCount+1;
       const newIngredients={
           ...this.state.ingredients
       }
       newIngredients[type]=newCount
       const oldprice=this.state.price
       const ingredientPrice=INGReDIENT_PRICES[type]
       const updatedPrice=oldprice+ingredientPrice
       this.setState({ ingredients:newIngredients,
        price:updatedPrice,
        flag:false
       })
   }
   removeIngredientHandler=(type)=>{



       const oldCount=this.state.ingredients[type]
       if(oldCount<=0){
         this.setState({
         })
        return null
       }
       
       const newCount=oldCount-1;
       const newIngredients={
           ...this.state.ingredients
       }
       newIngredients[type]=newCount
       const oldprice=this.state.price
       const ingredientPrice=INGReDIENT_PRICES[type]
       const newPrice=oldprice-ingredientPrice
       this.setState({
           ingredients:newIngredients,
           price:newPrice,
           
           
       })
       const ingredientLength=Object.keys(this.state.ingredients).map(igKey=>{
        return(
            [...Array(this.state.ingredients[igKey])].map((_,i)=>{
                return(
                        null
                    )
                

            })
        )
            //reduce method helps flat the array
    }).reduce((accumulator,item)=>{
        return accumulator.concat(item)
    })
     
    console.log(ingredientLength.length)
    if (ingredientLength.length<1) {
        this.setState({
            flag:true
        })
        
    }
   }
    render(){

        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addNewIngredient={this.addIngredientHandler}
                removeIngredientHandler={this.removeIngredientHandler}
                flag={this.state.flag}
                
                />
            </Auxiliary>
        )
    }

}
export default Burgerbuilder