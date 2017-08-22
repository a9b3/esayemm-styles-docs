import styles    from './variables.scss'

import variables from 'esayemm-styles/variables'
import {Code}    from 'rui-kit'

@cssModule(styles)
export default class TypeContainer extends React.Component {
  render() {
    return <div
      styleName='container'
    >
      <h2 styleName='header'>
        Variables
      </h2>

      <Code type='js'>
        {JSON.stringify(variables, null, '  ')}
      </Code>
    </div>
  }
}
