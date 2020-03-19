import React from "react"
/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core"

const globalCSS = css({
  body: {
    color: "red",
  },
})

export default ({ children }) => {
  console.log(children)
  return (
    <div>
      <Global styles={globalCSS} />
      {children}
    </div>
  )
}
