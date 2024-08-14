import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import thatReducer from './features/Mine.jsx'


const store = configureStore({
  reducer : {
    user: thatReducer,
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
   
  </StrictMode>,
)
