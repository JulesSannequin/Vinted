import React from "react";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ data }) => {
  const [disabled, setDisabled] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "2609754343",
      });

      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: data.product_name,
          amount: data.product_price,
        }
      );
      console.log(response.data);
      setDisabled(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input type="submit" value="Pay" disabled={disabled} />
    </form>
  );
};

export default CheckoutForm;
