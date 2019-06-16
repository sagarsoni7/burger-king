import React,{Component} from 'react';
import Layout from "./components/Layout/Layout"
import BurgerKingBuilder from "./containers/BurgerKingBuilder/BurgerKingBuilder"
class App extends Component{
  render(){
    return(
      <div>
      <Layout>
      <BurgerKingBuilder></BurgerKingBuilder>
      </Layout>
      </div>
    )
  }
}

export default App;
