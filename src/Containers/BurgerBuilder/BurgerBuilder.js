import React,{Component} from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"
class Burgerbuilder extends Component {
    state={
        ingredients:{
            meat:0,
            salad:0,
            cheese:0,
            bacon:0
        }
    }
   
    render(){
       
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Auxiliary>
        )
    }

}
export default Burgerbuilder