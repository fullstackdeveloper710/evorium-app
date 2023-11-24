import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const makePaymentHandler = async (billingAddress) => {
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    try {
      const stripeToken = await stripe.createToken(cardElement);
      const values = {
        // amount: amount, // Set the desired amount in cents
        // currency: "usd",
        // stripe_token: stripeToken.token.id,
        // order_temp_id: order_temp_id,
        // ...billingAddress,
      };

      //   dispatch(stripePayment({ values, token })).then(async ({ payload }) => {
      //     if (
      //       payload.response.status === "requires_action" &&
      //       payload.response.next_action.type === "use_stripe_sdk"
      //     ) {
      //       const { paymentIntent, error } = await stripe.confirmCardPayment(
      //         payload.response.client_secret
      //       );
      //       const values = {
      //         charge: paymentIntent,
      //         order_temp_id: order_temp_id,
      //       };
      //       if (!error) {
      //         switch (paymentIntent.status) {
      //           case "succeeded":
      //             break;
      //           case "processing":
      //             // toast.info(message.paymentUnderProccess);
      //             break;
      //           case "requires_payment_method":
      //             // toast.error(message.paymentRejected);
      //             break;
      //           default:
      //             // toast.error(message.somethingWentWrong);
      //             break;
      //         }
      //       } else {
      //         toast.error(message.paymentfailed);
      //       }
      //     } else {
      //       console.log("else block");
      //     }
      //   });
    } catch (error) {
      console.log("an eror occured");
    }
  };

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    makePaymentHandler();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <CardNumberElement id="card-number-element" options={options} />
      <CardCvcElement id="card-cvc-element" options={options} />
      <CardExpiryElement id="card-expiry-element" options={options} />
      <Button className="btn btn-dark text-white me-2">Cancel</Button>
      <Button type="submit" className="btn btn-primary">
        Pay
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
export default CheckoutForm;
