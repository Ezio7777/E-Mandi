import React from "react";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./details.css";

import Tabs from "./Tabs/Tab.jsx";
import View from "./overView/view.jsx";
import Related from "./RelateProduct/related.jsx";

const DetailsPage = (props) => {
  const location = useLocation();
  const data = location.state.data;
  const image = location.state.image;

  return (
    <>
      <section className="detailsPage mb-5">
        <div className="container detailsContainer pt-3 pb-3">
          {/* OverView Of the Product */}
          <View data={data} image={image} />

          <br />
          {/* Tabs */}

          <Tabs data={data} />

          {/* Related Product */}

          <Related data={data} />
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
