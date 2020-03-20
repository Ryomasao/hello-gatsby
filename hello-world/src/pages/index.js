import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"

export default props => {
  const { bg } = props.data
  return (
    <Layout>
      <div>
        <Hero bg={bg}>
          <h1>私が貢献できるN個のこと</h1>
        </Hero>
        <div css={{ padding: "10px" }}>
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    fixedImage: file(relativePath: { eq: "Hero.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImage: file(relativePath: { eq: "Hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg: file(relativePath: { eq: "Hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
