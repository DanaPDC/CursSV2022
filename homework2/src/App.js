import Exercise1 from "./components/exercise1.js";
import Exercise2 from "./components/exercise2.js";
import Exercise3 from "./components/exercise3.js";
import Exercise4 from "./components/exercise4.js";
import Product from "./components/product.js";

function App() {
  return (
    <>
      <div className="HomeWork2 d-flex">
        <Exercise1 />
        <Exercise2 name="Dana Verdes" />
        <Exercise3 />
        <Exercise4 withLoading={true} />
        <Product />
      </div>
    </>
  );
}

export default App;
