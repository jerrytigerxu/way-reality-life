import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"


export default ({ data }) => {
  return (
    <Layout>
      <div>
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
    allDirectory(filter: {relativeDirectory: {eq: ""}}) {
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
