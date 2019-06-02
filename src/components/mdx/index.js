import React from 'react'
import dashify from 'dashify'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'

export default {
  h1: props => <Title {...props} />,
  h2: props => {
    const { children } = props
    return <Subtitle id={dashify(children)} {...props} />
  },
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
