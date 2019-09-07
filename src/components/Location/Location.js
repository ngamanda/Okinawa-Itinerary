import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import styles from "./Location.module.css"

const Location = props => {
  const { name, image, address, directions, tripAdvisor, children } = props

  return (
    <div className={styles.container}>
      {image && (
        <a target="_blank" rel="noopener noreferrer" href={tripAdvisor}>
          <div
            className={styles.imageHolder}
            style={{ backgroundImage: `url(${image})` }}
          />
        </a>
      )}

      <div className={styles.content}>
        {tripAdvisor && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={tripAdvisor}
            className={`${styles.tripAdvisorUrl} ${!image &&
              name &&
              styles.name}`}
          >
            {name || "TripAdvisor"} <FontAwesomeIcon icon={faAngleRight} />
          </a>
        )}
        {address && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={directions}
            className={styles.directionsUrl}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
          </a>
        )}
        {children}
      </div>
    </div>
  )
}

Location.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  directions: PropTypes.string,
  tripAdvisorUrl: PropTypes.string,
  children: PropTypes.node,
}

export default Location
