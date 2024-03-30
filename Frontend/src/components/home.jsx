import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/hero";
import Navbar from "./navbar";
import Product from "./product/product";
import Top from "./TopBar/top";

const Home = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/product/view", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, [token]); // Call useEffect when token changes

  function checkAuthJoin() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/join");
    }
  }
  function checkAuthHost() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/host");
    }
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Top />
      <Product data={data} />
    </>
  );
};

export default Home;
