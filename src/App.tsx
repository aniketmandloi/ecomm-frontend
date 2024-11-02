import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
