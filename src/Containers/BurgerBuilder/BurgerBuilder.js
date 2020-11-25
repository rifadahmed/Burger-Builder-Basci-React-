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
        purchasable:false
    }
    updatePurchasable(newIngredients){

        const sum=Object.keys(newIngredients).map(igKey=>{
            return newIngredients[igKey]
        }).reduce((sum,item)=>{
            return sum+item
        },0);

        this.setState({purchasable: sum>0})
        
        console.log(this.state.purchasable)
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
       })
       this.updatePurchasable(newIngredients)
   }
   removeIngredientHandler=(type)=>{



       const oldCount=this.state.ingredients[type]
       if(oldCount<=0){

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
       this.updatePurchasable(newIngredients)

   }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addNewIngredient={this.addIngredientHandler}
                removeIngredientHandler={this.removeIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.price}
                purchasable={this.state.purchasable}

                />
            </Auxiliary>
        )
    }

}
export default Burgerbuilder