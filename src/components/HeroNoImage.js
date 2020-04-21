import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const bgStyle = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: '50px'
})

export default ({ bg, children }) => {
  return (
      <div css={bgStyle}>{children}</div>
  )
}
