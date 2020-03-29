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
  const { frontmatter, body } = post
  const { title } = frontmatter

  return (
    <Layout currentUri={uri}>
      {title && (
        <section>
          <Title>{title}</Title>
        </section>
      )}
      <MDXRenderer>{body}</MDXRenderer>
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
