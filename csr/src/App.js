import "./App.css";

//components
import Breadcrumb from "./components/Breadcrumb";
import FilterNavbar from "./components/FilterNavbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import TitleCategory from "./components/TitleCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <TitleCategory category="PROMOTION - 40% OFF" />
      <FilterNavbar />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
