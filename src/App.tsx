import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import {Layout} from "./components/Layout/Layout";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
        <Route index element={<LandingPage/>} />
        </Route>
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export { App };
