"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/app/screens/Home";
import Artists from "./app/screens/Artists";
import PageNotFound from "./app/screens/PageNotFound";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/artists/:id" element={<Artists />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HashRouter>
    );
}
