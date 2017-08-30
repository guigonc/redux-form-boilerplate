import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'app/components/app'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

/* eslint-disable */
const composeEnhancers = typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const middlewares = []
if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger({ level: 'info' }))

const reducers = combineReducers({
  form: formReducer
})

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('appContainer')
)
