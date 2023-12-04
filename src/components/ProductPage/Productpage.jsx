import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import style from "./ProductPage.module.css";
import { useNavigate, useParams } from "react-router-dom"
import percentage from "./images/percentageIcon.svg";
import flash from "./images/flash.svg";


import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const baseUrl =
    "https://jiomart-6f8ef-default-rtdb.firebaseio.com/products.json";

function valuetext(value) {
    return `${value}`;
}

const Productpage = () => {
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState([]);
    const dataRef = useRef([])
    const [refresh, setRefresh] = useState(false);
    const [sort, setSort] = useState("")

    const [value, setValue] = React.useState([5000, 100000]);
    const [valueDis, setValueDis] = React.useState([3, 50]);

    const clickOnInput = (val) => {
        if (brand.includes(val)) {
            let arr = brand.filter((e) => {
                if (e != val) {
                    return e;
                }
            })
            setBrand(arr)
        } else {
            setBrand([...brand, val])
        }
        setRefresh(!refresh)
    }


    useEffect(() => {
        if (brand.length) {
            const newArray = dataRef.current.filter((e) => {
                if (brand.includes(e.brand) && e.price >= value[0] && e.price <= value[1] && e.discount >= valueDis[0] && e.discount <= valueDis[1]) {
                    // console.log(e.discount)
                    return e
                }
            })
            setData(newArray)
        } else {
            const newArray = dataRef.current.filter((e) => {
                if (e.price >= value[0] && e.price <= value[1] && e.discount >= valueDis[0] && e.discount <= valueDis[1]) {
                    // console.log(e.discount, valueDis[0])
                    return e
                }
            })
            setData(newArray)
        }
        setSort("")
    }, [refresh, value, valueDis])

    useEffect(() => {
        if (sort == "asc") {
            let arr = [...data]
            arr.sort((a, b) => {
                if (a.price < b.price) {
                    return -1
                } else if (a.price == b.price) {
                    return 0
                } else {
                    return 1
                }
            })
            setData(arr);
        } else if (sort == "desc") {
            console.log(sort)
            let arr = [...data]
            arr.sort((a, b) => {
                if (a.price < b.price) {
                    return 1
                } else if (a.price == b.price) {
                    return 0
                } else {
                    return -1
                }
            })
            setData(arr);
        } else {
            setRefresh(!refresh)
        }
    }, [sort])


    // useEffect(() => {
    // }, [value])



    const navigate = useNavigate()

    const getData = async (url) => {
        try {
            const res = await axios.get(url);
            setData(res.data);
            dataRef.current = res.data
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        getData(baseUrl);
    }, []);

    // console.log(brand);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeDis = (event, newValueDis) => {
        setValueDis(newValueDis);
    };



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
                            <h5>Brands</h5>

                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Apple"
                                    onChange={(e) => {
                                        clickOnInput(e.target.value);
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
                                        clickOnInput(e.target.value);
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
                                        clickOnInput(e.target.value);
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
                                        clickOnInput(e.target.value);
                                    }}
                                />{" "}
                                One Plus
                            </label>
                            <br />

                            <label htmlFor="Xiaomi">
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Xiaomi"
                                    onChange={(e) => {
                                        clickOnInput(e.target.value);
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

                        <div>
                            <h5>Primary Camera</h5>

                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                />{" "}
                                2 MP
                            </label>
                            <br />
                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                />{" "}
                                64 MP
                            </label>
                            <br />
                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                />{" "}
                                8 MP
                            </label>
                            <br />

                            <hr />
                        </div>
                        <div>
                            <h5>SIM Type</h5>

                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                />{" "}
                                Single SIM
                            </label>
                            <br />
                            <label htmlFor="Apple">
                                <input
                                    type="checkbox"
                                />{" "}
                                Dual SIM
                            </label>
                            <br />
                        </div>
                    </div>
                </div>

                <div className={style.right_container}>
                    <div>
                        <select value={sort} onChange={(e) => { setSort(e.target.value) }} >
                            <option value="">
                                Sort by: Popularity
                            </option>
                            <option value="asc" >Price low to high</option>
                            <option value="desc">Price high to low</option>
                        </select>
                    </div>
                    <div className={style.product}>
                        {data.map((ele) => {
                            return (
                                <div key={ele.id} onClick={() => { navigate(`/Products/${ele.id}`) }}>
                                    <div className={style.imagediv}>
                                        <img src={ele.image} alt="image" className={style.pic} />
                                    </div>
                                    <div className={style.titlePic}>
                                        <p>{ele.title}</p>
                                        <p>
                                            <b>₹{ele.price}.00</b>{" "}
                                            <span className={style.line_through}>
                                                ₹{Math.ceil((ele.price * 100) / (100 - ele.discount))}
                                            </span>{" "}
                                            <span>{ele.discount}% OFF</span>
                                        </p>
                                        <p>

                                            <img src={percentage} alt="percentage" />&nbsp;
                                            <span>Exchange Offer Available</span>
                                            <br />
                                            <img src={flash} alt="flash" />&nbsp;
                                            <span>Limited Time Deal</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productpage;
