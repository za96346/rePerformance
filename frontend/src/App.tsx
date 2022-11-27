import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Layout from './share/Layout'

const App = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Navigate to={'/'} />}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
