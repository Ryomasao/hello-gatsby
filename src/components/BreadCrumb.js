import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const circle = css({
  position: "relative",
  border: "3px solid #3D95CC",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  textAlign: "center",
})

const activeCircle = css(
  {
    background: "#3D95CC",
  },
  circle
)

const innerCircle = css({
  position: "absolute",
  display: "inline-block",
  top: "50%",
  left: 0,
  width: "100%",
  textAlign: "center",
  transform: "translateY(-50%)",
})

const activeInnerCircle = css(
  {
    color: "white",
  },
  innerCircle
)

export default ({ max, currentNo, className }) => {
  return (
    <div
      css={{ display: "flex", justifyContent: "space-between" }}
      className={className}
    >
      {[...Array(max).keys()].map(item => {
        const number = item + 1
        return (
          <div css={number === currentNo ? activeCircle : circle}>
            <span css={number === currentNo ? activeInnerCircle : innerCircle}>
              {number}
            </span>
          </div>
        )
      })}
    </div>
  )
}
