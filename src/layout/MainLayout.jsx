import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
           <div className="container mx-auto">
             {/* Navbar */}
            <Navbar/>
            <Outlet />
            {/* Footer */}
            <Footer/>
           </div>
        </>
    );
};

export default MainLayout;
