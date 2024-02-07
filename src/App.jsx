import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { ProductContainer } from "./components/pages/ProductContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductContainer />
    </div>
  );
};

export default App;
