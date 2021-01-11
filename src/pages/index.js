import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"





export default ({ data }) => {
  return (
    <Layout>
        <div className="main grid">
            {data.allDirectory.edges.map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={"/" + node.relativePath}
                  >
                  <h4>{node.relativePath}</h4>
                  </Link>
              </div>
            ))}
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDirectory(filter: {relativeDirectory: {eq: ""}}, limit: 3) {
    edges {
      node {
        id
        relativeDirectory
        relativePath
      }
    }
  }
}

`
