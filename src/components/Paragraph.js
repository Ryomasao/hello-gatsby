import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default props => {
  return <p {...props} css={{ fontSize: "1.5rem" }}></p>
}
