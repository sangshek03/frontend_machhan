import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductGrid></ProductGrid>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
