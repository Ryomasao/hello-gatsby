import React from "react"
/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core"
import { Link, navigate } from "gatsby"
import { HotKeys } from "react-hotkeys"
import Helmet from "react-helmet"

import BreadCrumb from "./BreadCrumb"

const globalCSS = css({
  ".mark": {
    background: "linear-gradient(transparent 75%, #fff799 75%)",
    fontWeight: "bold",
  },
})

const getPageNo = uri => {
  if (!uri) return
  const result = uri.match(/page([0-9]*)/)
  // TODO yarn buildすると、uri.matchしないパターンがでてきてこける。ひとまずarray判定。
  // どんな処理が走ってんだろ
  if (Array.isArray(result) && result.length > 1) {
    return result[1]
  }
}

export default ({ children, currentUri, maxPageNo }) => {
  const currentPageNo = parseInt(getPageNo(currentUri))

  const hasBeforePage = currentPageNo > 0
  const hasNextPage = currentPageNo < maxPageNo

  const nextPage = React.useCallback(() => {
    navigate(`/page${currentPageNo + 1}`)
  }, [currentPageNo])

  const prevPage = React.useCallback(() => {
    navigate(currentPageNo === 1 ? "/" : `/page${currentPageNo - 1}`)
  }, [currentPageNo])

  const handlers = {
    NEXT: nextPage,
    PREV: prevPage,
  }

  const dummyElement = React.useRef(null)

  React.useEffect(() => {
    if (dummyElement.current) {
      dummyElement.current.focus()
    }
  }, [])

  return (
    <HotKeys handlers={handlers}>
      <React.Fragment>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
            rel="stylesheet"
          />
        </Helmet>
        <Global styles={globalCSS} />
        <div css={{ width: "calc(100% - 100px)", margin: "0 auto" }}>
          <BreadCrumb
            css={{ width: "60%", margin: "10px auto 0" }}
            max={maxPageNo}
            currentNo={currentPageNo}
          />
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
            <Link
              to={currentPageNo === 1 ? "/" : `/page${currentPageNo - 1}`}
              css={{ color: "gray", textDecoration: "none", padding: "5px" }}
            >
              Prev
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
            <Link
              to={`/page${currentPageNo + 1}`}
              css={{ color: "gray", textDecoration: "none", padding: "5px" }}
              ref={dummyElement}
            >
              Next
            </Link>
          </div>
        )}
      </React.Fragment>
    </HotKeys>
  )
}
