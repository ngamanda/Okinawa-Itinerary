import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"
import "./index.module.css"

const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
