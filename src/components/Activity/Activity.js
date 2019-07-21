import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarDay,
  faPlaneArrival,
  faPlaneDeparture,
  faUtensils,
  faCar,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./Activity.module.css"

const fetchIcon = type => {
  switch (type) {
    case "plane_departure":
      return faPlaneDeparture
    case "plane_arrival":
      return faPlaneArrival
    case "meals":
      return faUtensils
    case "drive":
      return faCar
    default:
      return faCalendarDay
  }
}

const Activity = props => {
  const { timing, title, type, children } = props

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={fetchIcon(type)}
        className={styles.heading__icon}
      />
      <div className={styles.content}>
        {timing && <h4 className={styles.heading__timing}>{timing}</h4>}
        <h3 className={styles.heading__title}>{title}</h3>
        {children && <div className={styles.additionalContent}>{children}</div>}
      </div>
    </div>
  )
}

Activity.propTypes = {
  timing: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Activity
