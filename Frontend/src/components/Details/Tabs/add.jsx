import React from "react";
import "../details.css";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

function info(props) {
  const data = props.data;
  return (
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
  );
}

export default info;
