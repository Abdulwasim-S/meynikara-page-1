import "./App.css";
import "./larger_device.css";
import "./desktop.css";
import "./mobile.css";
import "./tablet.css";
import NavBarComp from "./components/NavBarComp";
import HomePage from "./pages/HomePage";
import NewServicePage from "./pages/NewServicePage";
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
      <NewServicePage />
    </div>
  );
}

export default App;
