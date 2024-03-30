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

const DetailsPage = (props) => {
  const [inputValue, setinputValue] = useState(1);

  const [activeTabs, setActiveTabs] = useState(0);

  const [currentProduct, setCurrentProduct] = useState({});
  const [isAdded, setIsadded] = useState(false);

  const [prodCat, setProdCat] = useState({
    parentCat: sessionStorage.getItem("parentCat"),
    subCatName: sessionStorage.getItem("subCatName"),
  });

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [rating, setRating] = useState(0.0);

  const [reviewsArr, setReviewsArr] = useState([]);

  const [isAlreadyAddedInCart, setisAlreadyAddedInCart] = useState(false);

  const [reviewFields, setReviewFields] = useState({
    review: "This IS a review",
    userName: "@buyer123",
    rating: 3.5,
    productId: 0,
    date: "30/3/2024",
  });

  const zoomSliderBig = useRef();

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  //Start
  const location = useLocation();
  const data = location.state.data;
  const image = location.state.image;

  const weight = ["100g", "250g", "500g", "1kg", "2kg"];

  const [price, setPrice] = useState(data.price);
  const [activeSize, setActiveSize] = useState(3);
  const p = data.price;

  const isActive = (index) => {
    setActiveSize(index);

    //Change Price
    if (weight[index] == "100g") {
      setPrice(p * 0.1);
    } else if (weight[index] == "250g") {
      setPrice(p * 0.25);
    } else if (weight[index] == "500g") {
      setPrice(p * 0.5);
    } else if (weight[index] == "1kg") {
      setPrice(p * 1);
    } else if (weight[index] == "2kg") {
      setPrice(p * 2);
    }
  };

  return (
    <>
      <section className="detailsPage mb-5">
        <div className="container detailsContainer pt-3 pb-3">
          <div className="row product_margin_top">
            {/* productZoom code start here */}
            <div className="col-md-5">
              <div className="productZoom">
                <Slider
                  {...settings2}
                  className="zoomSliderBig"
                  ref={zoomSliderBig}
                >
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={image}
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {/* productZoom code ends here */}

            {/* product info code start here */}
            <div className="col-md-7 productInfo">
              <h1>{data.productName}</h1>
              <div className="d-flex align-items-center mb-4 mt-3">
                <Rating
                  name="half-rating-read"
                  value={parseFloat(data.rating)}
                  precision={0.5}
                  readOnly
                />
                <span className=" ml-2">(32 reviews)</span>
              </div>

              <div className="priceSec d-flex align-items-center mb-3">
                <span className="text-g priceLarge">Rs {price}</span>
                <div className="ml-3 d-flex flex-column">
                  {/* <span className="text-org">{data.discount}% Off</span>
                  <span className="text-light oldPrice">
                    Rs {data.oldPrice}
                  </span> */}
                </div>
              </div>

              <p>{data.description}</p>

              {weight !== undefined && weight.length !== 0 && (
                <div className="productSize d-flex align-items-center">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {weight.map((item, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="d-flex align-items-center">
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
              </div>
            </div>
            {/* product info code ends here */}
          </div>

          <div className="container mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                      // showReviews();
                    }}
                  >
                    Give Feedback
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 3 && "active"}`}
                    onClick={() => {
                      setActiveTabs(3);
                      // showReviews();
                    }}
                  >
                    Reviews ({data.feedback.length})
                  </Button>
                </li>
              </ul>

              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>{data.description}</p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      {reviewsArr.length !== 0 &&
                        reviewsArr !== undefined &&
                        reviewsArr.map((item, index) => {
                          return (
                            <div
                              className="card p-4 reviewsCard flex-row"
                              key={index}
                            >
                              <div className="image">
                                <div className="rounded-circle">
                                  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                </div>
                                <span className="text-g d-block text-center font-weight-bold">
                                  {item.userName}
                                </span>
                              </div>

                              <div className="info pl-5">
                                <div className="d-flex align-items-center w-100">
                                  <h5 className="text-light">{item.date}</h5>
                                  <div className="ml-auto">
                                    <Rating
                                      name="half-rating-read"
                                      value={parseFloat(item.rating)}
                                      precision={0.5}
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <p>{item.review} </p>
                              </div>
                            </div>
                          );
                        })}

                      <br className="res-hide" />

                      <br className="res-hide" />

                      <form className="reviewForm">
                        <h4>Add a review</h4> <br />
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                            value={reviewFields.review}
                            // onChange={(e) =>
                            //   changeInput(e.target.name, e.target.value)
                            // }
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={reviewFields.userName}
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                                // onChange={(e) =>
                                //   changeInput(e.target.name, e.target.value)
                                // }
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={rating}
                                precision={0.5}
                                // onChange={(e) =>
                                //   changeInput(e.target.name, e.target.value)
                                // }
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button type="submit" className="btn-g btn-lg">
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {activeTabs === 3 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-4 pl-5 reviewBox">
                      <h4>Customer reviews</h4>

                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={2}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">{data.rating} out of 5</strong>
                      </div>

                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">5 star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">4 star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "50%", height: "20px" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">3 star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            55%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">2 star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            35%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">1 star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-success"
                            style={{ width: "25%", height: "20px" }}
                          >
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <br />

          {/* <div className="relatedProducts homeProductsRow2  pt-5 pb-4">
            <h2 class="hd mb-0 mt-0">Related products</h2>
            <br className="res-hide" />
            <Slider {...related} className="prodSlider">
              {relatedProducts.length !== 0 &&
                relatedProducts.map((product, index) => {
                  return (
                    <div className="item" key={index}>
                      <Product tag={product.type} item={product} />
                    </div>
                  );
                })}
            </Slider>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
