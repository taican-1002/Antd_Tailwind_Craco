import React from "react";
import Header from "../../../common/components/layouts/Header";
import Banner from "../../../common/components/layouts/Banner";
import Partner from "../../../common/components/layouts/Partner";
import Service from "../../../common/components/layouts/Service";

const Home = () => {
  return (
    <div className="flex flex-col w-full ">
      <Header />
      <Banner />
      <Partner />
      <Service />
    </div>
  );
};

export default Home;
