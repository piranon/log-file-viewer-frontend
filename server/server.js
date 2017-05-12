import path from 'path'
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'

const app = new Express()
const port = 3000

if (process.env.NODE_ENV === 'production') {
  var webpackConfig = require('../webpack.prod.config.js')
} else {
  var webpackConfig = require('../webpack.config.js')
}

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const handleRender = (req, res) => {
  const preloadedState = { content: [], pagination: {}, pathFile: '' }

  // Create a new Redux store instance
  const store = configureStore(preloadedState)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}

// This is fired every time the server side receives a request
app.use(handleRender)

const renderFullPage = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Log File Viewer</title>
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
      </head>
      <body>
        <div class="container">
          <div id="app">${html}</div>
          <footer class="footer">
            <p>&copy; 2017 Piranon Nawakulpun.</p>
          </footer>
        </div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="dist/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
