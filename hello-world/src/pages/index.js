import React from "react"
import { Link } from "gatsby"

export default props => {
  return (
    <div>
      <h1>Hello world!</h1>
      <div>
        <Link to="/about">about use Link</Link>
      </div>
      <div>
        <a href="/about"> about use a tag</a>
      </div>
    </div>
  )
}
