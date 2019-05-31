import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import SubtitleH3 from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <SubtitleH3 {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
