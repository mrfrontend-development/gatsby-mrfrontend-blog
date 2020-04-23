import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import * as he from 'he'
import Color from 'color'
import Img from 'gatsby-image'

const Hero = props => <></>

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx, logo } }) {
  console.log('site: ', site)
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <section
        css={css`
          * {
            color: ${theme.colors.white};
          }
          width: 100%;
          padding: 1rem 0;
          display: flex;
          background-color: ${Color(theme.brand.primary)
            .alpha(0.8)
            .hsl()
            .string()};
        `}
      >
        <Container
          css={css`
            display: flex;
            flex-direction: column;
            text-align: center;
          `}
        >
          <img
            css={css`
              max-width: ${rhythm(3)};
              margin: 0 auto 1rem auto;
            `}
            src={site.siteMetadata.image}
            alt="Mr Frontend Logo"
          />

          <h1
            css={css`
              position: relative;
              z-index: 5;
              line-height: 1.5;
              margin: 0;
              max-width: ${rhythm(20)};
            `}
          >
            Mr Frontend
          </h1>
          <h2
            css={css`
              position: relative;
              z-index: 5;
              line-height: 1.5;
              margin: 0;
              max-width: ${rhythm(20)};
              font-size: 1.2rem;
            `}
          >
            <em>
              On a mission to teach Junior Devs & CodeNewbies HTML, CSS and
              JavaScript.
            </em>
          </h2>
          <p>More recent posts can be found on <strong><a href="https://medium.com/@devbyrayray" target="_blank">medium.com/@devbyrayray</a></strong></p>
        </Container>
        <div
          css={css`
            height: 150px;
            overflow: hidden;
          `}
        />
      </section>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: theme.transition.ease,
                ':hover': {
                  color: theme.brand.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {he.decode(post.frontmatter.title)}
              </Link>
            </h2>
            <small>
              <em>
                <time>{post.frontmatter.date}</time>
              </em>
            </small>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        <Link
          to="/blog"
          aria-label="Visit blog page"
          className="button-secondary"
        >
          View all articles
        </Link>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      ...site
      siteMetadata {
        title
        image
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
