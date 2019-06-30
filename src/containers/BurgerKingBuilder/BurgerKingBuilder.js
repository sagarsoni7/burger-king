import React, {Component} from "react";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Aux from "../../hoc/Auxi/Auxi"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Build Controls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES={
    chowmein: 20,
    cheese: 40,
    mayonnaise: 60,
    tikki: 100
};


class BurgerKingBuilder extends Component{

    state={
        ingredients:null,
        totalPrice: 30,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error:false
    };


    updatePurchaseState(yoIngredients){
        const ingredients={
            ...yoIngredients
        };
        const sum=Object.keys(ingredients)
        .map(key=>{
            return ingredients[key];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);

        this.setState({purchaseable: sum>0});
    };


    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount + 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice+ priceAddition;

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount=oldCount - 1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;

        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients)
    };

    purchaseHandler=()=>{
        this.setState({purchasing: true});
    };

    purchseCancelHandler=()=>{
        this.setState({purchasing: false});
    };

    purchaseContinueHandler=()=>{
    //    alert("Thanks babe for your order!")  
    this.setState({loading: true});
     const order={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: "Sagar",
                phone:"9996166717",
                email:"sagar.soni@zoho.com",
                street:"655 CC MS",
                city:"sirsa",
                state:"haryana"
            }
        }   
        axios.post("/orders.json", order)
        .then(response=>{
            this.setState({loading:false, purchasing: false});
        })
        .catch(error=>{
            this.setState({loading: false, purchasing: false});
        });
    }


    componentDidMount(){
        axios.get("/ingredients.json")
        .then(response=>{
            this.setState({
                ingredients:response.data
            });
        })
        .catch(error=>{
            this.setState({
                error: true
            })
        });
    }
    


    render(){

        const disabledInfo={
            ...this.state.ingredients
         }

         for(let key in disabledInfo){
             disabledInfo[key]= disabledInfo[key] <=0
         }
         
         let orderSummary=null;     

         let burgerDisplay=this.state.error?<p>Sorry bro, error aa gya</p>:<Spinner/>;
         if(this.state.ingredients){
            burgerDisplay=(
                <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
               disabled={disabledInfo}
               price={this.state.totalPrice}
               purchaseable={this.state.purchaseable}
               purchasing={this.purchaseHandler}/>
               </Aux>
            );
            orderSummary= (<OrderSummary 
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />);    
         }
         if(this.state.loading){
            orderSummary=<Spinner />;
        }
          
        return (
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchseCancelHandler}>
                {orderSummary}
            </Modal>           
           {burgerDisplay}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerKingBuilder, axios);