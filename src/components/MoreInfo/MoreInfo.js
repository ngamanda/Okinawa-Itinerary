import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Collapse } from "react-collapse"

class MoreInfo extends Component {
  state = { isOpened: false }

  render() {
    const { children } = this.props
    const { isOpened } = this.state

    return (
      <Fragment>
        <Collapse isOpened={isOpened}>{children}</Collapse>
      </Fragment>
    )
  }
}

MoreInfo.propTypes = {
  children: PropTypes.node,
}

export default MoreInfo
