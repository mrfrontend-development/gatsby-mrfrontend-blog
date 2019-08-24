import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import theme from '../../config/theme'
import { Twitter, GitHub, Slack, Patreon } from './Social'
import Container from './Container'
import Color from 'color'

const Footer = ({ author, noSubscribeForm }) => (
  <>
    <div
      css={css`
        max-width: 680px;
        margin: 0 auto;
        padding: 0 40px 1rem 40px;
        width: 100%;
    }
      `}
    >
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/mrfrontend"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://buttondown.email/mrfrontend', 'popupwindow')"
        className="embeddable-buttondown-form"
        css={css`
        display: grid;
        grid-template-rows: auto 50px 1fr;
        grid-template-columns: 1fr;
        
        }
    }
      `}
      >
        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
          `}
        >
          <h3>Subscribe to the Mr Frontend weekly newsletter</h3>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: 3fr 1fr;
          `}
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="Enter your email"
          />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </div>

        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
            padding-top: 2rem;
          `}
        >
          <p>
            Every week I will send you a email to help you: stay motivated,
            learn new things and the best 3 article's on the web
          </p>
        </div>
      </form>
      <hr />
    </div>

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
          <a
            href="https://shop.mrfrontend.org/"
            target="_blank"
            title="Mr Frontend Webshop"
          >
            <img
              src="https://res.cloudinary.com/raymons/image/upload/f_auto/v1564910288/Webshop_banner.png"
              alt="Write for Mr Frontend"
              style={{ marginBottom: 0 }}
            />
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
  </>
)

export default Footer
