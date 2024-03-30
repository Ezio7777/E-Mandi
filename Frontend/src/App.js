import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup";
import ContactUs from "./components/contact_us";
import About from "./components/about";
import Market from "./components/market.jsx";
import Dashboard from "./components/Dashboard/Farmer/main.jsx";
import Cart from "./components/cart/cart_main.jsx";
import Detail from "./components/Details/details.jsx";

import "./App.css";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import { createContext } from "react";

const MyContext = createContext();

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/market"
          element={
            <>
              <Market />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              {/* <Navbar /> */}
              <Dashboard />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Navbar />
              <Detail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

export { MyContext };
