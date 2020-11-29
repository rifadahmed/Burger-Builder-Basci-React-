import React from "react"
import Logo from "../../Logo/Logo"
import NavItems from "../../Navigation/NavigationItems/NavigationItems"
import classes from "./SideDrawer.module.css"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Auxiliary from "../../../Hoc/Auxiliary"
const SideDrawer = (props) => {
    let attachedClasse=[classes.SideDrawer,classes.Close]
    if(props.sideDrawerShow)
    {
         attachedClasse=[classes.SideDrawer,classes.Open]

    } 
    return (
        <Auxiliary>
        <div onClick={props.backDropClick}>
               <BackDrop show={props.show} />
               </div>
               
               <div className={attachedClasse.join(" ")}>
                   <div className={classes.Logo}>
                       <Logo/>
                   </div>
                   
                   <nav>
                       <NavItems/>
                       <p onClick={props.backDropClick}>Dummy trxt</p>
                   </nav>
               </div>
              
           </Auxiliary>

    )
}
export default SideDrawer