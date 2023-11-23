import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import RootLoader from "./components/common/RootLoader";
import { useDispatch, useSelector } from 'react-redux';

function App() {


  
  return (
    <>

      <Navigation />
      <RootLoader />
    </>
  );
}

export default App;
