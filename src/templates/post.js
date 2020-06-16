import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from "../components/layout"

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'






const Container = styled.div`
  h1, h2, h3 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export default ({ pageContext, location, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext





  const post = data.markdownRemark
  var title = ""
  if (post.frontmatter) {
    title = post.frontmatter.title
  }

  const html = post.html.replace(/https:\/\/github.com\/jerrytigerxu\/way-reality-life\/(tree|blob)\/master\/blog/g, "").replace(/.md/g, "/");





  return (

      <Layout>
        <Container>
          <div>
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator="-"
          />
            <h1>{ title }</h1>
            <div dangerouslySetInnerHTML={{__html: html }} />
          </div>
        </Container>
      </Layout>
  )
}

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
