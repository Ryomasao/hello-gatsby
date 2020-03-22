import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import DynamicImage from "../components/DynamicImage"

export default ({ srcs }) => {
  return (
    <div css={{ display: "flex" }}>
      {srcs.map((src, index) => (
        <div key={index} css={{ width: "100%", height: "100px" }}>
          <DynamicImage
            src={src}
            style={{ height: "100%" }}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  )
}
