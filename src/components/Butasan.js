import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import DynamicImage from "../components/DynamicImage"

const ballon = css({
  position: "relative",
  margin: "0 0 2em 40px",
  padding: "30px",
  background: "#fff0c6",
  borderRadius: "30px",
  width: "60%",
  display: "flex",
  alignItems: "center",

  "&:before": {
    content: `""`,
    position: "absolute",
    left: "-38px",
    width: "13px",
    height: "12px",
    top: "45px",
    background: "#fff0c6",
    borderRadius: "50%",
  },

  "&:after": {
    content: `""`,
    position: "absolute",
    left: "-24px",
    width: "20px",
    height: "18px",
    top: "40px",
    background: "#fff0c6",
    borderRadius: "50%",
  },
})

export default ({ text, name }) => {
  return (
    <div css={{ display: "flex" }}>
      <div css={{ width: "15%", textAlign: "center", marginTop: "20px" }}>
        <div css={{ textAlign: "center" }}>
          <DynamicImage
            src="butasan.png"
            style={{ height: "100%", borderRadius: "50%" }}
            imgStyle={{ objectFit: "contain" }}
          />
          <label css={{ fontSize: "0.5rem", fontWeight: "bold" }}>{name}</label>
        </div>
      </div>
      <div css={ballon}>
        <p css={{ margin: 0, whiteSpace: "pre-wrap" }}>{text}</p>
      </div>
    </div>
  )
}
