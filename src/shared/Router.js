import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from '../pages/Main';
import Post from '../pages/Post';
import Header from "../redux/components/Header/Header";

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/post' element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
}
