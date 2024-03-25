import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { MyContext } from "../../App";

const Product = () => {
  //   const [productData, setProductData] = useState();
  //   const [isAdded, setIsadded] = useState(false);

  //   const context = useContext(MyContext);

  //   useEffect(() => {
  //     setProductData(props.item);
  //   }, [props.item]);

  //   const setProductCat = () => {
  //     sessionStorage.setItem("parentCat", productData.parentCatName);
  //     sessionStorage.setItem("subCatName", productData.subCatName);
  //   };

  //   const addToCart = (item) => {
  //     context.addToCart(item);
  //     setIsadded(true);
  //   };

  const data = {
    tag: null,
    id: 1,
    name: "carrot",
    price: 199,
    oldPrice: 200,
    image:
      "https://www.jiomart.com/images/product/original/491278616/good-life-raw-peanuts-500-g-product-images-o491278616-p491278616-0-202306102242.jpg",
    brand: "Tuck",
    rating: 3.5,
  };

  return (
    <div className="productThumb">
      {data.tag !== null && data.tag !== undefined && (
        <span className={`badge ${data.tag}`}>{data.tag}</span>
      )}

      {data !== undefined && (
        <>
          <Link to={`/product/${data.id}`}>
            <div className="imgWrapper">
              <div className="p-4 wrapper mb-3">
                <img
                  src={data.image + "?im=Resize=(420,420)"}
                  className="w-100"
                />
              </div>

              {/* <div className='overlay transition'>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Add to Wishlist">
                                            <FavoriteBorderOutlinedIcon />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Compare">
                                            <CompareArrowsOutlinedIcon />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Quick View">
                                            <RemoveRedEyeOutlinedIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
            </div>
          </Link>

          <div className="info">
            <span className="d-block catName">{data.brand}</span>
            <h4 className="title">
              <Link>{data.name.substr(0, 50) + "..."}</Link>
            </h4>
            <Rating
              name="half-rating-read"
              value={parseFloat(data.rating)}
              precision={0.5}
              readOnly
            />
            <span className="brand d-block text-g">
              By <Link className="text-g">{data.brand}</Link>
            </span>

            <div className="d-flex align-items-center mt-3">
              <div className="d-flex align-items-center w-100">
                <span className="price text-g font-weight-bold">
                  Rs {data.price}
                </span>{" "}
                <span className="oldPrice ml-auto">Rs {data.oldPrice}</span>
              </div>
            </div>

            <Button
              className="w-100 transition mt-3"
              //   onClick={() => addToCart(productData)}
            >
              <ShoppingCartOutlinedIcon />
              {/* {isAdded === true ? "Added" : "Add"} */}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
