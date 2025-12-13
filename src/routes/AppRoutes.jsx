import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Detection from "../pages/Detection";
import KnowledgePage from "../pages/KnowledgePage";
import Blogs from "../pages/Blogs";
import MainLayout from "../layout/MainLayout";
import BMICalculator from "../pages/BMICalculator";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detection" element={<Detection />} />
                <Route path="/bmi" element={<BMICalculator/>}/>
                <Route path="/knowledge" element={<KnowledgePage />} />
                <Route path="/blog" element={<Blogs />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
