import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseContext from './context/firebase'
import { firebase, fieldValue } from './lib/firebase'

ReactDOM.render(
  <FirebaseContext.Provider values={{ firebase, fieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
