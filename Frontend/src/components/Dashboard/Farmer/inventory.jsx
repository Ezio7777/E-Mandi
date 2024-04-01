import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./inventory.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Swal from "sweetalert2";

const Dashboard = () => {
  let token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/inventory/show",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const json = await response.json();
        setData(json.product);
        console.log(data); // Handle the fetched data here
      } catch (error) {
        console.log(error.message);
      }
    };

    getItems(); // Call the getItems function when component mounts
  }, []);

  //Empty Inventory
  const emptyAllItem = () => {
    if (data.length > 0) {
      Swal.fire({
        title: "Remove This Product?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3bb77e",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          onEmptyInventory();
        }
      });
    } else {
      Swal.fire("Inventory is Already Empty");
    }
  }; //
  const onEmptyInventory = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/inventory/empty",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      const json = await response.json();
      console.log(json); // Handle the fetched data here
    } catch (error) {
      console.log(error.message);
    }
  };

  //Remove one item inventory
  const onRemove = (index) => {
    Swal.fire({
      title: "Remove This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3bb77e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        onRemoveOne(index);
      }
    });
  }; //
  const onRemoveOne = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/inventory/removeOne/${index}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      const json = await response.json();
      setData(json.product);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row inventory_body">
            <div className="">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0 cart_head">Your Inventory</h1>
                  <p className="cart_head_sub">
                    There are <span className="text-g">{data.length}</span>{" "}
                    products Listed
                  </p>
                </div>

                <button
                  className="ml-auto clearCart d-flex align-items-center empty-cart-btn "
                  onClick={emptyAllItem}
                >
                  Clear Inventory &nbsp;
                  <i class="fa-solid fa-trash delete-cart-all"></i>
                </button>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="row_center">Price/KG</th>
                        <th className="row_center">Available Quantity</th>
                        <th className="row_center">Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.length !== 0 &&
                        data.map((item, index) => {
                          return (
                            <tr>
                              <td width={"50%"}>
                                <div className="d-flex align-items-center">
                                  <div className="img">
                                    <Link>
                                      <img
                                        src={
                                          item.image + "?im=Resize=(100,100)"
                                        }
                                        className="w-100"
                                      />
                                    </Link>
                                  </div>

                                  <div className="info pl-4">
                                    <Link>
                                      <h4>{item.productName}</h4>
                                    </Link>
                                    <Rating
                                      className=""
                                      name="half-rating-read"
                                      value={parseFloat(item.rating)}
                                      precision={0.5}
                                      readOnly
                                    />
                                    {item.rating}
                                    <span className="rating_size">
                                      ({parseFloat(item.rating)})
                                    </span>
                                  </div>
                                </div>
                              </td>

                              <td width="20%" align="center">
                                <span>Rs.{item.price}</span>
                              </td>

                              <td align="center">
                                <span className="text-g">
                                  {item.CurQuantity}KG
                                </span>
                              </td>

                              <td align="center">
                                <button
                                  className="cursor "
                                  onClick={() => onRemove(index)}
                                >
                                  <i class="fa-solid fa-trash delete_btn_cart"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
