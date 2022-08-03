import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import notfound from "../../assets/img/notfound.png";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <img src={notfound} />
      <div id="info">
        <Typography.Title>This page could not be found</Typography.Title>
        <Link to="/" className="text-5xl text-blue-600 uppercase ">
          Go Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
