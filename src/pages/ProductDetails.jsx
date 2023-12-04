import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import style from "../pages/ProductDetails.module.css"
import percentage from "../components/images/percentageIcon.svg";
import flash from "../components/images/flash.svg";

const baseUrl =
  "https://fakestoreapi.com/products";

const handleAddToCart=()=>{

}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.parentwrapper} style={{marginTop:"100px"}}>
      <div className={style.topsectionwrapper}>
        <div className={style.imgwrapper}>
          <div className={style.imgdetailswrapper}>
            <div className={style.detailsimg}>
              <img className={style.img} src={product.image} alt="img1" />
            </div>
            <div className={style.detailsimg}>
              <img className={style.img} src={product.image} alt="img2" />
            </div>
            <div className={style.detailsimg}>
              <img className={style.img} src={product.image} alt="img3" />
            </div>
          </div>
          <div className={style.mainimgwrapper}>
            <img className={style.img} src={product.image} alt="img1" />
          </div>
        </div>
        <div className={style.produtdetailwrapper}>
          <div>
            <h1> {product.title} </h1>
            <h3> {product.brand} </h3>
            <h1>₹ {product.price} </h1> M.R.P:{" "}
            <p>{product.description}</p>
            <strike>₹ {product.mrp} </strike>
            <h2> In Stocs </h2>
            <p>
              {" "}
              Inaugural Offer <b>Free Shipping</b>
            </p>
          </div>
          <div className={style.paymentlogo}>
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/sodexo.svg"
              alt="img1"
            />
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/edenred.svg"
              alt="img1"
            />
            <img
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/food-icon/paytm_food_wallet.svg"
              alt="img1"
            />
            <p> T&C Apply </p>
          </div>
          <button id="btn" onClick={handleAddToCart} className={style.submit}>
            {" "}
            Add to Cart{" "}
          </button>
        </div>
      </div>
      <div className={style.middlesectionwrapper}>
        <div className={style.headingwrapper}>
          <h1> Description </h1>
        </div>
        <div className={style.descriptionpara}>
          <h3> {product.name} </h3>
          <p>
            {" "}
            You’re not competing against every product online. You’re competing
            against similar products in your industry. A hammer vs. hammer, for
            example. And while there’s a lot that goes into the buying decision
            process, one of the biggest reasons why shoppers buy your product
            over others is how you choose to describe it. Describe the little
            features. Talk about the nuances. Nothing is too insignificant or
            trivial!{" "}
          </p>
        </div>
      </div>
      <div className={style.bottomsectionwrapper}>
        <div className={style.headingwrapper}>
          <h1> Product Rating </h1>
        </div>
        <div className={style.ratingstars}>
          Rate Product <FaStar className={style.iconstar} />
          <FaStar className={style.iconstar} />
          <FaStar className={style.iconstar} />
          <FaStar className={style.iconstar} />
          <FaStar className={style.iconstar-1} />
        </div>

        <button className={style.ratingbtn}>WRITE REVIEW</button>
      </div>
    </div>
  );
};

export default ProductDetails;
