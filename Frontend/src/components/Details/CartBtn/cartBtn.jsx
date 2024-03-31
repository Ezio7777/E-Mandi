import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../details.css";
import { useState } from "react";

const CartBtn = () => {
  const [isAdded, setIsadded] = useState(false);
  const [isAlreadyAddedInCart, setisAlreadyAddedInCart] = useState(false);
  return (
    <div className="d-flex align-items-center">
      <Button
        className={`btn-g btn-lg addtocartbtn ${
          isAlreadyAddedInCart === true && "no-click"
        }`}
        // onClick={() => addToCart(currentProduct)}
      >
        <ShoppingCartOutlinedIcon />
        {isAdded === true || isAlreadyAddedInCart === true
          ? "Added"
          : "Add To Cart"}
      </Button>
      {/* <Button className=" btn-lg addtocartbtn  ml-3  wishlist btn-border">
                    <FavoriteBorderOutlinedIcon />{" "}
                  </Button> */}
    </div>
  );
};

export default CartBtn;
