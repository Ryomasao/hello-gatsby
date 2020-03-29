import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"

const bgStyle = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export default ({ bg, children }) => {
  return (
    <BackgroundImage fluid={bg.childImageSharp.fluid}>
      <div css={bgStyle}>{children}</div>
    </BackgroundImage>
  )
}
