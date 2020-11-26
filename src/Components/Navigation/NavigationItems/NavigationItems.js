import React from "react"
import NavigationItem from "./NavigationItem/Navigationitem"
import classes from "./NavigationItems.module.css"
const navigationItems = () => (

        <ul className={classes.NavigationItems}>
            <NavigationItem active="true" link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
)
export default navigationItems