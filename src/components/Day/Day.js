import React from "React"
import PropTypes from "prop-types"
import { StickyContainer, Sticky } from "react-sticky"

import styles from "./Day.module.css"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const Day = ({ date, mainLocation, children }) => {
  const dateObj = new Date(date)

  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <div className={styles.header} style={style}>
            <h3 className={styles.header__title}>
              <span>
                <span className={styles.header__title__day}>
                  {days[dateObj.getDay()]}
                </span>
                {months[dateObj.getMonth()]} {dateObj.getDate()}
              </span>
              <span className={styles.header__location}>{mainLocation}</span>
            </h3>
          </div>
        )}
      </Sticky>
      <div className={styles.content}>{children}</div>
    </StickyContainer>
  )
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Day
