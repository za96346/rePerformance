import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Layout from './share/Layout'

const Auth = lazy((): any => import('./page/Auth/Index'))

const App = (): JSX.Element => {
    return (
        <Suspense fallback={'loading...'}>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Navigate to={'auth'} />}/>
                        <Route path='auth' element={<Auth />}></Route>
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    )
}

export default App
