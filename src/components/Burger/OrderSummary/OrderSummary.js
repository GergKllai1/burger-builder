import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)} $</strong>
      </p>
      <p>Continue to Checkout?</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTIUE
        </Button>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
      </div>
    </Aux>
  );
};

export default OrderSummary;
