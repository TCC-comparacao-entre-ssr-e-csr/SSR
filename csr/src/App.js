
//components
import Breadcrumb from "./components/Breadcrumb";
import FilterNavbar from "./components/FilterNavbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TitleCategory from "./components/TitleCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <TitleCategory category="Test" />
      <FilterNavbar />
      <Footer />
    </div>
  );
}

export default App;
