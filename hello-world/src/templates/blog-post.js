import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useSelector } from "react-redux"

export default props => {
  const [counter, setCounter] = useState(2)
  const post = props.data.markdownRemark
  //console.log(props.pageContext)

  const reduxCounter = useSelector(state => state.counter)

  return (
    <div>
      <button type="button" onClick={() => setCounter(prev => ++prev)}>
        increment
      </button>
      <p>count:{counter}</p>
      <p>reduxCounter:{reduxCounter}</p>
      <div>{props.pageContext.slug}</div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link>Back to Top</Link>
    </div>
  )
}

// ここのslugはcontextに設定されているslugでqueryが走る
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
