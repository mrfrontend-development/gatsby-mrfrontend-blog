import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import theme from '../../config/theme'
import { Twitter, GitHub } from './Social'
import Container from './Container'
import Color from 'color'

const Footer = ({ author, noSubscribeForm }) => (
  <>
    <footer>
      <Container
        css={css`
          padding-top: 0;
          ${bpMaxSM} {
            padding-top: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              font-size: 90%;
              opacity: 0.7;
            `}
          >
            {author && `${author} \u00A9 ${new Date().getFullYear()}`}
          </div>
          <div>
            <Twitter />
            <GitHub />
          </div>
        </div>
      </Container>
    </footer>
  </>
)

export default Footer
