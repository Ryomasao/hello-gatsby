import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default props => {
  const { bg } = props.data
  return (
    <Layout>
      <div>
        <Hero bg={bg}>
          <h1>
            <Link to="/page1">私ができるN個のこと</Link>
          </h1>
        </Hero>
      </div>
    </Layout>
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
