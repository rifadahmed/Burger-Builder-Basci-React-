import React, { Component } from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import classes from "./Layout.module.css"
import Toolbar from "../Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
class Layout extends Component {
    state={
        backDropFlag:true,
        sideDrawerShow:true
    }
    backDropClick = () => {
        this.setState({
            sideDrawerShow:false,
            backDropFlag:false
        })
    }
    render (){

        return (
            <Auxiliary >
            <Toolbar/> 
            <SideDrawer show={this.state.backDropFlag}
             backDropClick={this.backDropClick} 
             sideDrawerShow={this.state.sideDrawerShow}/>
             
            <div className="">Tollbar,Sidedrawer,Backdrop</div>
            <main className={classes.content}>{this.props.children}</main>
            
        </Auxiliary>
        )
    }
}



export default Layout