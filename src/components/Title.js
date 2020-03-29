import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Reveal } from "react-genie"

const titleStyle = css({
  fontSize: "3rem",
  lineHeight: 2,

  "&:after": {
    display: "block",
    width: "0%",
    transform: "1s",
    transition: "width 1s",
    borderBottom: "6px solid #3D95CC",
    content: `""`,
  },
  ".animated &:after": {
    display: "block",
    width: "100%",
    borderBottom: "6px solid #3D95CC",
    content: `""`,
  },
})

export default ({ children }) => {
  return (
    <Reveal animation="animated">
      <h2 className="title" css={titleStyle}>
        {children}
      </h2>
    </Reveal>
  )
}
