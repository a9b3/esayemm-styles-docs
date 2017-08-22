import styles     from './app-shell.component.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import {
  Link,
  withRouter,
}                 from 'react-router-dom'
import {
  AppShell,
  TruncateText,
}                 from 'rui-kit'

@withRouter
@CSSModules(styles)
export default class ExampleAppShell extends React.Component {
  static propTypes = {
    demoLinks: PropTypes.any,
    location : PropTypes.object.isRequired,
    children : PropTypes.node.isRequired,
  }

  render() {
    const {
      location,
      demoLinks,
      children,
    } = this.props

    const leftNode = <Link to='/'><h4>ESAYEMM-STYLES</h4></Link>

    const headerNode = <TruncateText
      key={location.key}
      className={styles['middle-title']}
    >
      <h4>
        {location.pathname.replace('/', '') || ''}
      </h4>
    </TruncateText>

    const rightNodeLinks = [
      {
        display: 'Github',
        href   : 'https://github.com/esayemm/esayemm-styles',
      },
    ]

    return <AppShell
      headerNode={headerNode}
      leftNode={leftNode}
      rightNodeLinks={rightNodeLinks}
      links={demoLinks}
      contentWidth={'100%'}
    >
      {children}
    </AppShell>
  }
}
