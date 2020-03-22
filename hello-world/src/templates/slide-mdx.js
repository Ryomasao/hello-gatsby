import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/SlideLayout"
import Title from "../components/Title"

export default props => {
  const { uri, data } = props
  const post = data.mdx

  return (
    <Layout currentUri={uri}>
      <section>
        <Title>{post.frontmatter.title}</Title>
      </section>
      <div css={{ width: "15%" }}>
        <svg>
          <g fill="none">
            <path d="M10 80 Q 95 10 180 80" strokeWidth="5" stroke="red"></path>
          </g>
        </svg>
        <svg>
          <g fill="none">
            <path
              d="M10 100 Q 95 10 200 70"
              strokeWidth="5"
              stroke="red"
            ></path>
          </g>
        </svg>
      </div>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
