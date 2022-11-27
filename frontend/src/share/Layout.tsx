import React from "react"
import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default Layout
