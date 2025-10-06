import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/navbar.tsx";

export default function LayOut() {
    return (
        <>
            <NavbarComponent />
            <Outlet/>
        </>
    )
}