import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../pages/ProductPage.module.css";
import { Link } from "react-router-dom";
import percentage from "../components/images/percentageIcon.svg";
import flash from "../components/images/flash.svg";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const baseUrl =
    "https://jiomart-6f8ef-default-rtdb.firebaseio.com/products.json";

function valuetext(value) {
    return `${value}`;
}

const Productpage = () => {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("");

    const getData = async (url) => {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData(baseUrl);
    }, []);

    console.log(brand);

    const [value, setValue] = React.useState([5000, 70000]);
    const [valueDis, setValueDis] = React.useState([3, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeDis = (event, newValueDis) => {
        setValueDis(newValueDis);
    };

    console.log(value);
    console.log(valueDis);

    return (
        <div className={style.product_page_container}>
            <div className={style.address}>
                <h6>
                    <span>Home</span> {" > "}
                    <span>All Categories</span>
                    {" > "}
                    <span>Electronics</span>
                    {" > "}
                    <span> Mobiles & Tablets</span>
                </h6>
            </div>
            <div className={style.main_container}>
                <div className={style.left_container}>
                    <div>
                        <h2>Filters</h2>

                        <div>
                            <h4>brands</h4>

                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Apple"
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />{" "}
                                Apple
                            </label>
                            <br />

                            <label htmlFor="Poco">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Poco"
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />{" "}
                                Poco
                            </label>
                            <br />

                            <label htmlFor="Tecno">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Tecno"
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />{" "}
                                Tecno
                            </label>
                            <br />

                            <label htmlFor="OnePlus">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="OnePlus"
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />{" "}
                                One Plus
                            </label>
                            <br />

                            <label htmlFor="Xiomi">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Xiomi"
                                    onChange={(e) => {
                                        setBrand(e.target.value);
                                    }}
                                />{" "}
                                Xiaomi
                            </label>
                            <br />
                        </div>

                        <hr />
                        {/* for price */}
                        <div className={style.slider}>
                            <h5>Price Range</h5>
                            <Slider
                                getAriaLabel={() => "Price range"}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={1000} // set the minimum value
                                max={100000} // set the maximum value
                            />
                        </div>

                        <hr />
                        {/* for Discount */}
                        <div className={style.dis}>
                            <h5>Discount Range</h5>
                            <Slider
                                getAriaLabel={() => "Discount range"}
                                value={valueDis}
                                onChange={handleChangeDis}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={0} // set the minimum value
                                max={60} // set the maximum value
                            />
                        </div>

                        <hr />
                    </div>
                </div>

                <div className={style.right_container}>
                    <div>
                        <select>
                            <option value="">
                                Sort by: <b>Popularity</b>
                            </option>
                            <option value="asc">Price low to high</option>
                            <option value="desc">Price high to low</option>
                        </select>
                    </div>
                    <div className={style.product}>
                        {data.map((ele) => {
                            return (
                                <Link to={`/products/${ele.id}`} key={ele.id}>
                                <div>
                                    <div className={style.imagediv}>
                                        <img src={ele.image} alt="image" className={style.pic} />
                                    </div>
                                    <div>
                                        <p>{ele.title}</p>
                                        <p>
                                            <b>{ele.price}</b>{" "}
                                            <span className={style.line_through}>
                                                ₹{Math.ceil((ele.price * 100) / (100 - ele.discount))}
                                            </span>{" "}
                                            <span>{ele.discount}% OFF</span>
                                        </p>
                                        <p>
                                            <img src={percentage} alt="percentage" />
                                            <span>Exchange Offer Available</span>
                                            <br />
                                            <img src={flash} alt="flash" />
                                            <span>Limited Time Deal</span>
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productpage ;