import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export default props => {
  const { allMarkdownRemark } = props.data

  return (
    <Layout>
      <div>Hello</div>
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
  }
`
