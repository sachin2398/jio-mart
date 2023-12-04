import React from 'react'
import ce1 from "./image/ce-1.webp";
import ce2 from "./image/ce-2.webp";
import ce3 from "./image/ce-3.webp";
import ce4 from "./image/ce-4.webp";
import styles from "./Homepage.module.css";
export const SecondCarousel = () => {
  return (
    <div >


<div className="row" style={{ height: '90px'}}>
  <div className="col">
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1500"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ce1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={ce2} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1500"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ce3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={ce4} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>

</div>





    </div>
  )
}
