import React from "react";
import Hero from "../components/Hero";
import BusinessList from "../components/BusinessList";

const HomePage = ({ data }) => {
  return (
    <div>
      <Hero />
      <BusinessList data={data} />
    </div>
  );
};

export default HomePage;
