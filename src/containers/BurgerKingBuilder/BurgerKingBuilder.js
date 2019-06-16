import React, {Component} from "react";
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build Controls/BuildControls"

class BurgerKingBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return (
            <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls></BuildControls>
            </Aux>
        )
    }
}

export default BurgerKingBuilder;