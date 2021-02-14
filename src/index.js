import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'
import './styles/users.css'
import './styles/albums.css'
import './styles/photos.css'


ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
registerServiceWorker()
