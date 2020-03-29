import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import DynamicImage from "../components/DynamicImage"

export default ({ srcs, title }) => {
  return (
    <div css={{ padding: "10px" }}>
      <div>{title && <span css={{ color: "#9a9a9a" }}>{title}</span>}</div>
      <div css={{ display: "flex", flexWrap: "wrap" }}>
        {srcs.map((src, index) => (
          <div key={index} css={{ width: "33%", height: "100px" }}>
            <DynamicImage
              src={src}
              style={{ height: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
