import React from "react"
import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2>Sept 12, 2019 - Sept 16, 2019</h2>
        <h1>Okinawa, Japan</h1>
      </div>
    </div>
  )
}

export default Banner
