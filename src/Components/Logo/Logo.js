import React from "react"
import logoImg from "../../Assets/Images/burger.png"
import classes from "./Logo.module.css"
const logo = (props) => (
    <img  className={classes.Logo} style={{height: props.height}} src={logoImg} alt="burger logo "/>
)
export default logo