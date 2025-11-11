import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import LatestJobs from "../components/LatestJobs";
import Error from "./Error";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <LatestJobs></LatestJobs>

      
    </div>
  );
};

export default Home;
