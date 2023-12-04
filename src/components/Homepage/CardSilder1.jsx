import React from 'react'
import styles from "./Homepage.module.css";
import d1 from "./image/d-1.webp";
import d2 from "./image/d-2.webp";
import d3 from "./image/d-3.webp";
import d4 from "./image/d-4.webp";
import d5 from "./image/d-5.webp";
import d6 from "./image/d-6.webp";
import d7 from "./image/d-7.webp";

export const CardSilder1 = () => {
  return (
    <div>
        <h5 className={styles.head3Card1}>Shop From Top Categories</h5>
          
        <div id="imageSlider" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={d1} className="d-block w-100" alt="Image 1" />
    </div>
    <div className="carousel-item">
      <img src={d2} className="d-block w-100" alt="Image 2" />
    </div>
    <div className="carousel-item">
      <img src={d3} className="d-block w-100" alt="Image 3" />
    </div>
    <div className="carousel-item">
      <img src={d4} className="d-block w-100" alt="Image 4" />
    </div>
    <div className="carousel-item">
      <img src={d5} className="d-block w-100" alt="Image 5" />
    </div>
    <div className="carousel-item">
      <img src={d6} className="d-block w-100" alt="Image 6" />
    </div>
    <div className="carousel-item">
      <img src={d7} className="d-block w-100" alt="Image 7" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#imageSlider"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#imageSlider"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
