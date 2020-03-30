import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql, Link, navigate } from "gatsby"
import { HotKeys } from "react-hotkeys"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default props => {
  const { bg } = props.data

  // Hotkeyでページ遷移できるようにする
  //propsからもnavigate渡されるっぽいけど、公式みるとimportしてたのでこれを使う。
  const startPresentation = React.useCallback(() => {
    navigate("/page1")
  }, [])

  const handlers = {
    NEXT: startPresentation,
  }

  const dummyElement = React.useRef(null)

  // HotKeyを使う際にページにフォーカスがあたってないと機能しないので
  // 初期表示に適当にフォーカスをあてる
  React.useEffect(() => {
    dummyElement.current.focus()
  }, [])

  return (
    <HotKeys handlers={handlers}>
      <div ref={dummyElement} tabIndex={1}></div>
      <Layout>
        <div>
          <Hero bg={bg}>
            <h1>
              <Link
                to="/page1"
                css={{ textDecoration: "none", color: "white" }}
              >
                わたしができること
              </Link>
            </h1>
          </Hero>
        </div>
      </Layout>
    </HotKeys>
  )
}

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "Hero3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
