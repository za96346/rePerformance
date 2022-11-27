import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

export const reducer = combineReducers({
    user: () => []
})

// 持久化根reducers
const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: []
},
reducer
)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...[thunk]))
)
export const persisStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
