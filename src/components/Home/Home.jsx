import React from "react";

import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";
import TourBanner from "./TourBanner";
import Tracks from "../Tracks/Tracks";
import ShopBanner from "./ShopBanner";
import News from "../News/News";

const Home = () => (
  <main className="main">
    <MainBanner />
    <TourItems />
    <TourBanner />
    <Tracks />
    <ShopBanner />
    <News />
  </main>
);

export default Home;
