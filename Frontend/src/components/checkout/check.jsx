import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./check.css";
import Swal from "sweetalert2";

const Checkout = () => {
  const location = useLocation();
  const data = location.state.data;
  const totalPrice = location.state.totalPrice;
  const shipping = location.state.shipping;
  const navigate = useNavigate();

  const [formFields, setformFields] = useState({
    name: "",
    pincode: "",
    address: "",
    phoneNumber: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;

    setformFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const placeOrder = async () => {
    try {
      console.log(data);
      let products = [];
      data.map((item) => {
        products.push({
          productId: item.productId,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity,
          description: item.description,
          farmer_id: item.farmer_id,
          image: item.image,
        });
      });
      const response = await fetch("http://localhost:4000/api/order/place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          price: data.price,
          cat: data.cat,

          buyer_id: data.buyer_id,
          buyerName: data.buyerName,
          date: data.date,
          products: products,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        Swal.fire({
          icon: "success",
          title: "Order Placed",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "warning",
          title: "Not Listed",
          text: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="cartSection mb-5 checkoutPage">
      <div className="container">
        <form>
          <div className="row check_body">
            <div className="col-md-8">
              <div className="form w-75 mt-4 shadow">
                <h3>Shopping Address</h3>
                <div className="form-group mb-3 mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Enter Full Name"
                    variant="outlined"
                    className="w-100"
                    value={formFields.name}
                    onChange={changeInput}
                    name="name"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Enter Pincode"
                    variant="outlined"
                    className="w-100"
                    value={formFields.pincode}
                    onChange={changeInput}
                    name="pincode"
                  />
                </div>
                <div className="form-group mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Enter Phone Number."
                    variant="outlined"
                    className="w-100"
                    value={formFields.phoneNumber}
                    onChange={changeInput}
                    name="phoneNumber"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    label="Enter Full Address"
                    variant="outlined"
                    className="w-100"
                    multiline
                    rows={4}
                    value={formFields.address}
                    onChange={changeInput}
                    name="address"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4 cartRightBox">
              <div className="container proceed-body  p-4 ">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 black_color">Subtotal</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold black_color">
                    <span className="text-g black_color">{totalPrice}</span>
                  </h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 black_color">Shipping Fee</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold black_color">
                    <span className="black_color">
                      {!shipping ? "FREE" : 10}
                    </span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 black_color">Total Item</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold black_color">
                    <span className="black_color"> {data.length}</span>
                  </h3>
                </div>

                {/* <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 black_color">Estimate for</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">INDIA</h3>
                </div> */}

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 black_color">Total Amount</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span className="text-g black_color">
                      {!shipping ? totalPrice : totalPrice + 10}
                    </span>
                  </h3>
                </div>
                <br />
                <Button
                  className="btn-g btn-lg proceed-btn"
                  onClick={placeOrder}
                >
                  Make Payment
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
