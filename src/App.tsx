import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
