import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'
import * as he from 'he'
import * as patreonBtn from '../../static/images/become_a_patron_button.png'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <div
          css={css`
            width: 100%;
            flex-shrink: 0;
            background: none;
            padding: 1rem 0;
            background: #333;
            margin-bottom: 1rem;
            text-align: center;
            line-height: 42px;
            display: flex;
            justify-content: center;
            color: #fff;
          `}
        >
          <strong
            css={css`
              line-height: 42px;
              height: 42px;
              margin-right: 0.5rem;
            `}
          >
            Do you love what we do?
          </strong>

          <a
            href="https://www.patreon.com/bePatron?u=3475069"
            target="_blank"
            css={css`
              display: inline-block;
              height: 42px;
            `}
            title="Become a patron"
            rel="noopener noreferrer"
          >
            <img
              css={css`
                height: 42px;
              `}
              src={patreonBtn}
              alt="Become a patron"
              style={{ marginBottom: 0 }}
            />
          </a>
          <span
            css={css`
              margin-left: 0.5rem;
            `}
          >
            at Patreon <span role="img" aria-label="heart">❤️</span>
          </span>
        </div>
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              font-size: 2.5em;
            `}
          >
            {he.decode(title)}
          </h1>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
              h3,
              span {
                text-align: center;
                opacity: 0.6;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
            {author && <h3>{author}</h3>}
            {author && <span>—</span>}
            {date && (
              <h3>
                <date>{date}</date>
              </h3>
            )}
          </div>
          {banner && (
            <div
              css={css`
                margin: 1rem -6rem;
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                sizes={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            </div>
          )}
          <br />
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <div
          css={css`
            width: 100%;
            flex-shrink: 0;
            background: none;
            padding: 1rem 0;
            background: #333;
            margin-bottom: 1rem;
            text-align: center;
            line-height: 42px;
            display: flex;
            justify-content: center;
            color: #fff;
          `}
        >
          <strong
            css={css`
              line-height: 42px;
              height: 42px;
              margin-right: 0.5rem;
            `}
          >
            Do you love what we do?
          </strong>

          <a
            href="https://www.patreon.com/bePatron?u=3475069"
            target="_blank"
            css={css`
              display: inline-block;
              height: 42px;
            `}
            title="Become a patron"
            rel="noopener noreferrer"
          >
            <img
              css={css`
                height: 42px;
              `}
              src={patreonBtn}
              alt="Become a patron"
              style={{ marginBottom: 0 }}
            />
          </a>
          <span
            css={css`
              margin-left: 0.5rem;
            `}
          >
            at Patreon <span role="img" aria-label="heart">❤️</span>
          </span>
        </div>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />

        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      code {
        body
      }
    }
  }
`
