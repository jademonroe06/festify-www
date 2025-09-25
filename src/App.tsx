"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/app/screens/Home";
import PageNotFound from "./app/screens/PageNotFound";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HashRouter>
    );
}
