import React from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import classes from "./Layout.module.css"
import Header from "../Toolbar/Toolbar"
const layout = (props)=>(
    <Auxiliary>
        <Header/>
        <div className="">Tollbar,Sidedrawer,Backdrop</div>
        <main className={classes.content}>{props.children}</main>
    </Auxiliary>
)

export default layout