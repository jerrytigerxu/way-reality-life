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



{/*
export default ({ data }) => {
  return (
    <Layout>
      <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                >
                <h4>{node.fields.slug}</h4>
                <p>{node.excerpt}</p>
                </Link>
            </div>
          ))}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
        }
      }
    }
}

`

*/}
