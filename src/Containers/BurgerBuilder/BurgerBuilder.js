import React,{Component} from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/BuildControls/BuildControls"
import Modal from "../../Components/UI/Modal/Modal"
import OrderSummary from "../../Components/OrderSummary/OrderSummary"
import Backdrop from "../../Components/UI/Backdrop/Backdrop"
import axios from "../../axios-orders"

const INGReDIENT_PRICES={
    meat:2,
    salad:0.75,
    bacon:0.5,
    
    cheese:1.75
}
class Burgerbuilder extends Component {
    state = {
        ingredients:{
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0,
        },
        price: 4,
        purchasable: false,
        orderButton: false,
    }
    updatePurchasable(newIngredients){

        const sum = Object.keys(newIngredients).map(igKey => {
            return newIngredients[ igKey ]
        }).reduce((sum,item ) => {
            return sum + item
        }, 0);

        this.setState({purchasable: sum>0})
        
    }
   addIngredientHandler = ( type ) => {

       const oldCount = this.state.ingredients[ type ]
       const newCount = oldCount + 1;
       const newIngredients = {
           ...this.state.ingredients
       }
       newIngredients[ type ] = newCount
       const oldprice = this.state.price
       const ingredientPrice = INGReDIENT_PRICES[ type ]
       const updatedPrice = oldprice + ingredientPrice
       this.setState({ ingredients: newIngredients,
        price: updatedPrice,
       })
       this.updatePurchasable(newIngredients)
   }
   removeIngredientHandler = ( type ) => {
       const oldCount = this.state.ingredients[ type ]
       if(oldCount <= 0){
        return null
       }
       const newCount = oldCount-1;
       const newIngredients = {
           ...this.state.ingredients
       }
       newIngredients[ type ] = newCount
       const oldprice = this.state.price
       const ingredientPrice = INGReDIENT_PRICES[ type ]
       const newPrice = oldprice-ingredientPrice
       this.setState({
           ingredients: newIngredients,
           price: newPrice,
       })
       this.updatePurchasable(newIngredients)

   }
   orderButtonHandler = () => {
       this.setState({
           orderButton: true
       })
   }
   backdropClickHandler = () => {
    this.setState({
        orderButton: false
    })
    
   }
   continueButtonHandler  = () => {
       const burgerOrderData ={
        ingredients: this.state.ingredients,
        price: this.state.price,
        customer: {
            name: "rifad",
            address: {
                street: "testStreet",
                zipCode: "3242",
                country: "Bangladesh"
            },
            email: "rifad@gmail.com"
            
        },
        deliveryMethod: "fastest"
       }
       axios.post("/orders.json",burgerOrderData)
       .then(response => console.log(response))
       .catch(error => console.log(error))
   }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[ key ] = disabledInfo[ key ] <= 0
        }
        return(
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients} />

                <BuildControls 
                    addNewIngredient = {this.addIngredientHandler}
                    removeIngredientHandler = {this.removeIngredientHandler}
                    disabledInfo = {disabledInfo}
                    price = {this.state.price}
                    purchasable = {this.state.purchasable}
                    orderButtonHandler = {this.orderButtonHandler}
                />

                <Modal clicked = {this.state.orderButton}>
                    <OrderSummary 
                    ingredients = {this.state.ingredients}
                    cancelBtn = {this.backdropClickHandler}
                    continueBtn = {this.continueButtonHandler}
                    price = {this.state.price}
                    />
                </Modal>

                <Backdrop 
                show = {this.state.orderButton} 
                modalClickHandler = {this.backdropClickHandler}
                />
                
            </Auxiliary>
        )
    }

}
export default Burgerbuilder