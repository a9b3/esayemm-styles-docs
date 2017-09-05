import styles    from './colors.scss'
import variables from 'esayemm-styles/variables'

import { ClickCopy } from 'rui-kit'

@cssModule(styles)
export default class ColorContainer extends React.Component {
  renderColors = (colors) => {
    const nodes = []
    for (const key in colors) {
      nodes.push(
        <div
          styleName='color'
          key={key}
        >
          <div
            styleName='color__palette'
            style={{backgroundColor: colors[key]}}
          />
          <ul styleName='color__info'>
            <li>
              <ClickCopy copyText={colors[key]}>
                {colors[key]}
              </ClickCopy>
            </li>
            <li>
              <ClickCopy copyText={`$${key}`}>
                ${key}
              </ClickCopy>
            </li>
          </ul>
        </div>
      )
    }
    return nodes
  }

  renderGroupedColors = (groupedColors) => {
    const nodes = []

    for (const key in groupedColors) {
      nodes.push(
        <section styleName='colors'>
          <b styleName='colors__header'>
            {key}
          </b>

          <div styleName='colors__palettes'>
            {this.renderColors(groupedColors[key])}
          </div>
        </section>
      )
    }

    return nodes
  }

  render() {
    const groupedColors = groupColors(variables.colors)

    return <div styleName='container'>
      <h2 styleName='container__header'>Colors</h2>

      <div styleName='container__content'>
        {this.renderGroupedColors(groupedColors)}
      </div>
    </div>
  }
}

function groupColors(colors) {
  const group = {}
  for (const key in colors) {
    const groupKey = key.replace(/[0-9]/, '')
    if (!group[groupKey]) {
      group[groupKey] = {}
    }

    group[groupKey][key] = colors[key]
  }
  return group
}
