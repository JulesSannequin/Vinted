import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./components/pages/Home";
import Offer from "./components/pages/Offer";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Header from "./components/Header";

function App() {
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("usertoken");
    }
  };
  return (
    <div className="container">
      <Router>
        <Header handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:offerId" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
