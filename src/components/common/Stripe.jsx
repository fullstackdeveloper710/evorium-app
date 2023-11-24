import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userMakePayment } from "../../redux/thunk/user/usrPayment";

const CheckoutForm = ({ amount, programId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const { userAuthtoken } = useSelector((state) => state.userAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  const makePaymentHandler = async (billingAddress) => {
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    try {
      const stripeToken = await stripe.createToken(cardElement);
      const values = {
        amount: amount,
        token: stripeToken.token.id,
        program_id: programId,
      };

      dispatch(userMakePayment({ values, userAuthtoken })).then(
        async ({ payload }) => {
          if (
            payload.responseData.status === "requires_action" &&
            payload.responseData.next_action.type === "use_stripe_sdk"
          ) {
            const { paymentIntent, error } = await stripe.confirmCardPayment(
              payload.responseData.client_secret
            );
            const values = {
              charge: paymentIntent,
            };
            if (!error) {
              switch (paymentIntent.status) {
                case "succeeded":
                  break;
                case "processing":
                  // toast.info(message.paymentUnderProccess);
                  break;
                case "requires_payment_method":
                  // toast.error(message.paymentRejected);
                  break;
                default:
                  // toast.error(message.somethingWentWrong);
                  break;
              }
            } else {
              // toast.error(message.paymentfailed);
            }
          } else {
            console.log("else block");
          }
        }
      );
    } catch (error) {
      console.log("an eror occured");
    }
  };

  const options = {};

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
