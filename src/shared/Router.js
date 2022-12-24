import React from "react";

// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Family from "../pages/Family";
import Main from "../pages/Main";
import Hobby from "../pages/Hobby";
import Life from "../pages/Life";
import Detail from "../pages/Detail";
import Post from "../pages/Post";
import Relationship from "../pages/Relationship";
import Header from "../redux/components/Header/Header";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="life" element={<Life />} />
          <Route path="relationship" element={<Relationship />} />
          <Route path="family" element={<Family />} />
          <Route path="hobby" element={<Hobby />} />
          <Route path="post" element={<Post />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
