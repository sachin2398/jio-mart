import React, { useEffect } from 'react'
import axios from "axios";

const baseUrl = "https://jiomart-6f8ef-default-rtdb.firebaseio.com/products.json"


const Productpage = () => {

    const getData = async (url) => {
        try {
            const res = await axios.get(url);
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData(baseUrl)

    }, [])


    return (
        <div>Productpage</div>
    )
}

export default Productpage