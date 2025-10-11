import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/navbar.tsx";
import Footer from "../components/footer/footer.tsx";

export default function LayOut() {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <Footer />
        </>
    )
}