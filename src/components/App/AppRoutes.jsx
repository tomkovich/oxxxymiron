import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import TourPage from "../Tour/TourPage";
import TracksPage from "../Tracks/TracksPage";
import NewsPage from "../News/NewsPage";
import NewsSingle from "../News/NewsSingle";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/tour" element={<TourPage />} />
    <Route path="/tracks" element={<TracksPage />} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/news/:id" element={<NewsSingle />} />
  </Routes>
);

export default AppRoutes;
