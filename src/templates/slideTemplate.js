import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/SlideLayout"
import Title from "../components/Title"

export default props => {
  const { uri, data } = props
  const post = data.page
  const { frontmatter, body } = post
  const { title } = frontmatter

  const maxPageNo = data.pages.edges.length

  return (
    <Layout currentUri={uri} maxPageNo={maxPageNo}>
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
    page: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    pages: allMdx(filter: { frontmatter: { type: { eq: "slide" } } }) {
      edges {
        node {
          id
        }
      }
    }
  }
`
