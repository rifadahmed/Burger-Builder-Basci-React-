import React from "react"
import logoImg from "../../Assets/Images/burger.png"
import classes from "./Logo.module.css"
const logo = () => (
    <img  className={classes.Logo} src={logoImg} alt="burger logo "/>
)
export default logo