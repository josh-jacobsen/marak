import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers'

import App from './components/App'
import Landing from './containers/LandingContainer'
import EventList from './containers/EventListContainer'
import CreateEvent from './components/Landing' //placeholder replace when exists

let store = createStore(
  appReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='events' component={EventList} />
          <Route path='new-event' component={CreateEvent} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
