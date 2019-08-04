import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import theme from '../../config/theme'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <div
        css={css`
          display: flex;
          max-width: 1024px;
          margin: 0 auto;
        `}
      >
        {/* <div className="product">
          <h2>Code, Fail, Learn Repeat</h2>
          <img src="https://printful.s3.us-west-1.amazonaws.com/files/30a/30a9f993da9e037834940039bf06d1d3?response-content-disposition=inline%3B%20filename%3D%22mockup-992a54d8.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJH7JLGRY6WQHFAZQ%2F20190728%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20190728T194228Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=fea9a2d3c2e01e147bd0f38367645fd52089bb27a083608092c95b0b4319d43f" />
        </div>
        <div className="product">
          <h2>Code, Fail, Learn Repeat</h2>
          <img src="https://printful.s3.us-west-1.amazonaws.com/files/bb5/bb56a105f2b9aa0e7de8372c1efb2b36?response-content-disposition=inline%3B%20filename%3D%22mockup-00d8c80e.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJH7JLGRY6WQHFAZQ%2F20190728%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20190728T194441Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=38c0ee3f32b4bb81f5fc22293eb2ef4ec2821cbff8b531d263c276aabb93911b" />
        </div>
        <div className="product">
          <h2>Code, Fail, Learn Repeat</h2>
          <img src="https://printful.s3.us-west-1.amazonaws.com/files/c55/c55eb8c61437c4f96a5f8f3bd623912e?response-content-disposition=inline%3B%20filename%3D%22mockup-1ab34975.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJH7JLGRY6WQHFAZQ%2F20190728%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20190728T194527Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=b3203756d44f874786d57ec78ac0e64e364f71af36aec4c0b75348a1f71c6b9f" />
        </div> */}
      </div>
      <hr />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
