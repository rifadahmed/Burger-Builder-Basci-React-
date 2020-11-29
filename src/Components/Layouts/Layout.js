import React from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import classes from "./Layout.module.css"
import Toolbar from "../Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
const layout = (props)=>(
    <Auxiliary>
        <Toolbar/>
        <SideDrawer/>
        <div className="">Tollbar,Sidedrawer,Backdrop</div>
        <main className={classes.content}>{props.children}</main>
    </Auxiliary>
)

export default layout