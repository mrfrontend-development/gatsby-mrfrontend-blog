import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
// import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, Slack, Patreon } from './Social'
import Container from './Container'
import * as banner from '../../static/images/write-for-mr-frontend.jpeg'

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={banner}
          alt="Write for Mr Frontend"
          style={{ marginBottom: 0 }}
        />
        <a href="https://twitter.com/frontendmr/">
          <strong>Send a message via Twitter @mrfrontend</strong>
        </a>
      </div>
      {/* {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )} */}
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
          <Slack />
          <Patreon />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
