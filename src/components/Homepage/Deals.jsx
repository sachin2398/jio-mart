import React from 'react';
import deal from "./image/cd-1.webp";
import styles from "./Homepage.module.css";

export const Deals = () => {
  return (
    <div className={styles.dealsPadding}>
        <div className="card mb-3">
  <img src={deal} className="card-img-top" alt="..." />
</div>
    </div>
  )
}
