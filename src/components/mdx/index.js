import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import SubtitleH3 from './SubtitleH3'
import Paragraph from './Paragraph'
import Code from './Code'
import Quote from './Quote'

const dashify = (str, options) => {
  if (typeof str !== 'string') return str
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => (/[À-ž]/.test(m) ? m : '-'))
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, m => (options && options.condense ? '-' : m))
    .toLowerCase()
}

export default {
  h1: props => <Title {...props} />,
  h2: props => {
    const { children } = props
    const id = dashify(children) || ''
    return (
      <a href={`#${id}`}>
        {' '}
        <Subtitle id={id} {...props} />
      </a>
    )
  },
  h3: props => {
    const { children } = props
    const id = dashify(children) || ''
    return (
      <a href={`#${id}`}>
        {' '}
        <SubtitleH3 id={id} {...props} />
      </a>
    )
  },
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
  blockquote: Quote,
}
