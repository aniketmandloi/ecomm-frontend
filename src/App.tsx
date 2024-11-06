import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import ProductDetails from "./routes/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
