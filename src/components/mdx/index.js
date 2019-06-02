import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import SubtitleH3 from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'

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
    return <Subtitle id={id} {...props} />
  },
  h3: props => <SubtitleH3 {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
