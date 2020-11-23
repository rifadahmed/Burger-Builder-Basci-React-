import React from "react"
import Auxiliary from "../../Hoc/Auxiliary"
import classes from "./Layout.module.css"
const layout = (props)=>(
    <Auxiliary>
        <div className="">Tollbar,Sidedrawer,Backdrop</div>
        <main className={classes.content}>{props.children}</main>
    </Auxiliary>
)

export default layout