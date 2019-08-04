import React from 'react'
import * as patreonBtn from '../../static/images/become_a_patron_button.png'
import { css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'

const PatreonBanner = () => {
  return (
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
        @media (max-width: 800px) {
          flex-direction: column;
        }
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
        at Patreon
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </span>
    </div>
  )
}

const PatreonBannerMDX = ({ childeren }) => {
  return 'Hellllloooo'
  // return <MDXProvider components={PatreonBanner} />
}

export { PatreonBannerMDX }

export default PatreonBanner
