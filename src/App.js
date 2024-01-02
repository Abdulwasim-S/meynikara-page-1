import "./App.css";
import NavBarComp from "./components/NavBarComp";
import HomePage from "./pages/HomePage";
import ProductsPaegArrow from "./pages/ProductsPaegArrow";
import ProductsPage from "./pages/ProductsPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="App bg-dark">
      <NavBarComp />
      <HomePage />
      <ServicePage />
      <ProductsPage />
      <ProductsPaegArrow />
    </div>
  );
}

export default App;
