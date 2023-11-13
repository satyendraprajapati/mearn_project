import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
