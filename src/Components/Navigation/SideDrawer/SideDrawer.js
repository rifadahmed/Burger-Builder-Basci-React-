import React from "react"
import Logo from "../../Logo/Logo"
import NavItems from "../../Navigation/NavigationItems/NavigationItems"
import classes from "./SideDrawer.module.css"
const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            
            <nav>
                <NavItems/>
            </nav>
        </div>
    )
}
export default SideDrawer