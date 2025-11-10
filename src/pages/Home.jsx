import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import LatestJobs from "../components/LatestJobs";

const latestJobsPromise = fetch("http://localhost:3000/latestJobs").then(
  (res) => res.json()
);
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <LatestJobs latestJobsPromise={latestJobsPromise}></LatestJobs>
      </Suspense>
    </div>
  );
};

export default Home;
