import styles from './type.container.scss'

const domHelper = {
  getEmValue(fontSize = '') {
    const baseFontSize = Number(window.getComputedStyle(window.document.body).fontSize.replace('px', ''))
    return Number(fontSize.replace('px', '')) / baseFontSize
  },
  calcLineHeight({fontSize = '1', lineHeight = '1'}) {
    const _fontSize = Number(fontSize.replace('px', ''))
    const _lineHeight = Number(lineHeight.replace('px', ''))
    return _lineHeight/_fontSize
  },
}

@cssModule(styles)
export default class TypeContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({})
    }, 100)
  }

  _refs = {}

  setRef(key, val) {
    if (!this._refs[key]) {
      this._refs[key] = val
      this.setState({})
    }
  }

  getRef(key) {
    return this._refs[key]
  }

  getRefComputedStyle(key) {
    const ref = this.getRef(key)
    return ref ? window.getComputedStyle(ref) : {}
  }

  getCalculatedSize(key) {
    const computedStyle = this.getRefComputedStyle(key)

    return {
      em: domHelper.getEmValue(computedStyle.fontSize),
      computedStyle,
    }
  }

  renderInfo(key) {
    const {computedStyle, em} = this.getCalculatedSize(key)
    return <ul>
      <li>Size: {computedStyle.fontSize}</li>
      <li>Size (em): {em}em</li>
      <li>Weight: {computedStyle.fontWeight}</li>
      <li>Line Height:{domHelper.calcLineHeight(computedStyle)}</li>
    </ul>
  }

  render() {
    return <div
      styleName='container'
    >
      <div styleName='container__info'>
        <h2 styleName='header'>
          Typography
        </h2>

        <section>
          <h1 styleName='item'
            ref={el => this.setRef('h1', el)}
          >
            Header 1
          </h1>

          {this.renderInfo('h1')}
        </section>

        <section>
          <h2 styleName='item'
            ref={el => this.setRef('h2', el)}
          >
            Header 2
          </h2>

          {this.renderInfo('h2')}
        </section>

        <section>
          <h3 styleName='item'
            ref={el => this.setRef('h3', el)}
          >
            Header 3
          </h3>

          {this.renderInfo('h3')}
        </section>

        <section>
          <h4 styleName='item'
            ref={el => this.setRef('h4', el)}
          >
            Header 4
          </h4>

          {this.renderInfo('h4')}
        </section>

        <section>
          <p styleName='item'
            ref={el => this.setRef('body', el)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
            velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
            volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
            velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
            volutpat sit amet.
          </p>

          {this.renderInfo('body')}
        </section>
      </div>
    </div>
  }
}
