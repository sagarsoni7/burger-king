import React from "react";
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const controls=[
    {label: "Chowmein", type: "chowmein"},
    {label:"Cheese", type: "cheese"},
    {label: "Mayo", type: "mayonnaise"},
    {label: "Aloo Tiki", type: "tikki"}
];


const buildControls=(props)=>(
    <div className={classes.BuildControls}>
    <p><strong>Total Price: &#x20B9;{props.price.toFixed(0)}</strong></p>
    {controls.map(val=>(
        <BuildControl 
        key={val.label} 
        label={val.label} 
        added={()=>props.ingredientAdded(val.type)}
        removed={()=>props.ingredientRemoved(val.type)}
        disabled={props.disabled[val.type]}
        /> 
    ))}
    </div>
)

export default buildControls;