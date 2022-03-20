import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {List} from "../components/list/list";
import {Detail} from "../components/detail/detail";
import {Search} from "../components/search/search";
import {Home} from "../components/home/home";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Search />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="items/:id" element={<Detail />} />
                <Route path="items" element={<List />} />
            </Routes>
        </BrowserRouter>
    );
}
