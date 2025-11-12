import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import LatestJobs from "../components/LatestJobs";
import Error from "./Error";
import TopCategories from "../components/TopCategories";

import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <LatestJobs></LatestJobs>

      <TopCategories></TopCategories>

      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
