import React from "react"
import Logo from "../../Logo/Logo"
import NavItems from "../../Navigation/NavigationItems/NavigationItems"
const SideDrawer = () => {
    return (
        <div className="">
            <Logo/>
            <nav>
                <NavItems/>
            </nav>
        </div>
    )
}
export default SideDrawer