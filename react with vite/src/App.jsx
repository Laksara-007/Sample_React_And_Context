import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Users from "./pages/Users";
import BookPage from "./pages/BookPage";
import UserInfo from "./pages/UserInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
