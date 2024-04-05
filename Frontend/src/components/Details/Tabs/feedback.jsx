import React from "react";
import { useState } from "react";
import "../details.css";

import Rating from "@mui/material/Rating";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { Button } from "@mui/material";

const Feedback = (props) => {
  const [reviewsArr, setReviewsArr] = useState([]);
  const [reviewFields, setReviewFields] = useState({
    review: "This IS a review",
    userName: "@buyer123",
    rating: 3.5,
    productId: 0,
    date: "30/3/2024",
  });
  const data = props.data;
  return (
    <div className="tabContent">
      <div className="row">
        <div className="col-md-8">
          {/* <div className="card p-4 reviewsCard flex-row">
            <div className="image">
              <div className="rounded-circle">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
              </div>
              <span className="text-g d-block text-center font-weight-bold">
                ankush
              </span>
            </div>

            <div className="info pl-5">
              <div className="d-flex align-items-center w-100">
                <h5 className="text-light">{2 / 2 / 2}</h5>
                <div className="ml-auto">
                  <Rating
                    name="half-rating-read"
                    value={parseFloat(1)}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>

              <p>awesome product </p>
            </div>
          </div> */}

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
                    value={data.rating}
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
  );
};

export default Feedback;
