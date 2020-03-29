import React from "react"
/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core"
import { Link } from "gatsby"
import Helmet from "react-helmet"

const globalCSS = css({})

const getPageNo = uri => {
  if (!uri) return
  const result = uri.match(/page([0-9]*)/)
  // TODO yarn buildすると、uri.matchしないパターンがでてきてこける。ひとまずarray判定。
  // どんな処理が走ってんだろ
  if (Array.isArray(result) && result.length > 1) {
    return result[1]
  }
}

export default ({ children, currentUri }) => {
  const currentPageNo = parseInt(getPageNo(currentUri))

  // TODO 適当
  const hasBeforePage = currentPageNo > 0
  const hasNextPage = currentPageNo < 5

  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
      </Helmet>
      <Global styles={globalCSS} />
      <div css={{ width: "calc(100% - 100px)", margin: "0 auto" }}>
        {children}
      </div>
      {hasBeforePage && (
        <div
          css={{
            position: "absolute",
            width: "50px",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <Link to={currentPageNo === 1 ? "/" : `page${currentPageNo - 1}`}>
            前へ
          </Link>
        </div>
      )}
      {hasNextPage && (
        <div
          css={{
            position: "absolute",
            width: "50px",
            height: "100vh",
            top: 0,
            right: 0,
          }}
        >
          <Link to={`page${currentPageNo + 1}`}>次へ</Link>
        </div>
      )}
    </React.Fragment>
  )
}
