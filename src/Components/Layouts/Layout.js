import React, { Component } from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import classes from "./Layout.module.css"
import Toolbar from "../Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
class Layout extends Component {
    state={
        backDropFlag:false,
        sideDrawerShow:false
    }
    backDropClickHandler = () => {
        this.setState({
            sideDrawerShow:false,
            backDropFlag:false
        })
    }
    menuClickHandler = () => {
        this.setState({
            sideDrawerShow:true,
            backDropFlag:true
        })
        
    }
    render (){

        return (
            <Auxiliary >
            <Toolbar menuClick={this.menuClickHandler}/> 
            <SideDrawer show={this.state.backDropFlag}
             backDropClick={this.backDropClickHandler} 
             sideDrawerShow={this.state.sideDrawerShow}/>
             
            <div className="">Tollbar,Sidedrawer,Backdrop</div>
            <main className={classes.content}>{this.props.children}</main>
            
        </Auxiliary>
        )
    }
}



export default Layout