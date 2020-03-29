import React from "react"
/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core"
import Helmet from "react-helmet"

const globalCSS = css({})

export default ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
      </Helmet>
      <Global styles={globalCSS} />
      {children}
    </React.Fragment>
  )
}
