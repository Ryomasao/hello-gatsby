import React from "react"
import { Link, graphql } from "gatsby"

export default props => {
  const { allMarkdownRemark } = props.data

  return (
    <div>
      <div>articleNumber{allMarkdownRemark.totalCount}</div>
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Link key={node.id} to={node.fields.slug}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.date}</p>
            <div>{node.excerpt}</div>
          </Link>
        )
      })}
      <div>
        <Link to="/about">about use Link</Link>
      </div>
      <div>
        <a href="/about"> about use a tag</a>
      </div>
    </div>
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
