import React      from 'react'
import styles     from './index.scss'
import CSSModules from 'react-css-modules'

import {
  Code,
}                 from 'rui-kit'
import variables  from 'esayemm-styles/variables'
import sassVariables from '!!raw-loader!esayemm-styles/variables.scss'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <div styleName='index'>
      <h3>Install</h3>

      <section>
        <Code>
          {`yarn add esayemm-styles --save`}
        </Code>
      </section>

      <section>
        Javascript variables via esayemm-styles/variables.js
      </section>

      <section>
        <Code type='js'>
          {JSON.stringify(variables, null, '  ')}
        </Code>
      </section>

      <section>
        Sass variables via esayemm-styles/variables.scss
      </section>

      <section>
        <Code type='sass'>
          {sassVariables}
        </Code>
      </section>
    </div>
  }
}
