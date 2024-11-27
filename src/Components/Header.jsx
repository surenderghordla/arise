import { Outlet } from "react-router-dom"
export default function Header() {
    return (<>
        <header>
            <img src="./logo.jpg" alt="logo" width={30} />
            <img src="./named.png" alt="logo" width={120} />
        </header>
        <Outlet />
    </>
    )
}