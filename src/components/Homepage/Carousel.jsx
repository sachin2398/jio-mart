import React from 'react';
import cr1 from "./image/cr-1.jpg";
import cr2 from "./image/cr-2.webp";
import cr3 from "./image/cr-3.webp";
import cr4 from "./image/cr-4.webp";
import cr5 from "./image/cr-5.webp";
import cr6 from "./image/cr-6.webp";

export const Carousel = () => {
  return (
    <div>
        <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="1000"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
     <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={3}
      aria-label="Slide 3"
    />

<button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={4}
      aria-label="Slide 4"
    />

<button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={5}
      aria-label="Slide 5"
    />

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={cr1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={cr2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={cr3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={cr4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={cr5} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={cr6} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
