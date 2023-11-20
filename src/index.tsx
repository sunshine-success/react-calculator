import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'

const container = document.getElementById('root')

if (container) {
  const root = ReactDOMClient.createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}


// If you want your app to work offline and load faster, you can change
// serviceWorker.unregister() to serviceWorker.register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
