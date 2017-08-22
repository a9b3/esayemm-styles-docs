import React     from 'react'
import { Route } from 'react-router'
import Index     from 'views/index/index.js'
import AppShell  from './components/app-shell/app-shell.component.js'

const demoLinks = [
  {
    header: 'Docs',
    items : [
      {
        display  : 'Typography',
        to       : '/typography',
        component: require('./views/type').Type,
      },
      {
        display  : 'Colors',
        to       : '/colors',
        component: require('./views/colors').Colors,
      },
    ],
  },
]

/**
 * @param {array.<node>} links
 * @returns {array.<Route>}
 */
function linksToRoute(links) {
  const items = links.reduce((arr, val) => {
    return arr.concat(val.items)
  }, [])

  return items.map((item, key) => {
    return <Route
      key={`${key}-${item.to}`}
      path={item.to}
      component={item.component}
    />
  })
}

export default (
  <AppShell demoLinks={demoLinks}>
    <Route path='/' exact component={Index} />
    {linksToRoute(demoLinks)}
  </AppShell>
)
