import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.colors.white};
      }
      width: 100%;
      background: url('https://res.cloudinary.com/raymons/image/upload/c_scale,e_brightness:-39,w_2560,f_auto/v1558779974/mr-frontend-banner.jpg')
        no-repeat center center;
      background-size: cover;
      padding: 6rem 0;
      display: flex;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <img
        css={css`
          max-width: ${rhythm(5)};
        `}
        src="https://res.cloudinary.com/raymons/image/upload/c_scale,w_427,f_auto/v1558780567/logo.png"
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
        `}
      >
        <em>On a mission to help Junior Devs & CodeNewbies to their job</em>
      </h2>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
)

export default Hero
