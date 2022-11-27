import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persisStore, store } from './reduxer/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persisStore}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
