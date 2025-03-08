import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/login";
import Register from "./Screens/register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
