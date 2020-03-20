import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql } from "gatsby"
import { Parallax } from "react-scroll-parallax"

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
        <div css={{ position: "relative" }}>
          <div
            css={{
              padding: "10px",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Section title="" text="" />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
          </div>
          <Parallax css={{ position: "absolute", top: 0 }} y={[200, -200]}>
            <div>
              <h1>text</h1>
            </div>
          </Parallax>
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
    icon: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
