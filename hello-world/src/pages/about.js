import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <div>
        <Link to="/">back to Top using link</Link>
      </div>
      <div>
        <a href="/about"> cack to Top using a tag</a>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
