import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import RootLoader from "./components/common/RootLoader";
import "./utility/Translate/i18n";

function App() {
  return (
    <>
      <Navigation />
      <RootLoader />
    </>
  );
}

export default App;
