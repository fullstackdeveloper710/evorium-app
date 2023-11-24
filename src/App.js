import Navigation from "./navigation";
import RootLoader from "./components/common/RootLoader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./utility/Translate/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Navigation />
        <RootLoader />
      </Elements>
    </>
  );
}

export default App;
