import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from "react-router-dom"
import store from "../src/app/store"
import { Provider } from 'react-redux'
import { router } from './routes/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router = {router} />
      <App />
    </Provider>
  </React.StrictMode>,
)
