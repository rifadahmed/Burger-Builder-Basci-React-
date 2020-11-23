import React,{Component} from 'react'
import Layout from "./Components/Layouts/Layout"
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder"
class  App extends Component {

  render(){

    
  return (
    <div className="">
    <Layout>
      <BurgerBuilder/>
    </Layout>
    </div>


  )
  }
  
}

export default App;
