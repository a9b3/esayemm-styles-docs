import React      from 'react'
import styles     from './index.scss'
import CSSModules from 'react-css-modules'

import {
  Code,
}                 from 'rui-kit'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <div styleName='index'>
      <h3>Install</h3>

      <Code>
        {`yarn add esayemm-styles --save`}
      </Code>
    </div>
  }
}
