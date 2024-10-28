import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
