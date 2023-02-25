import React from 'react'
import axios from 'axios'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { API_HOST } from './utility'
import App from './App'
import { store } from './store'

import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API ?? API_HOST

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
