import React, {useState} from "react";
import Hero from "../components/Hero";
import BusinessList from "../components/BusinessList";
import YelpAPI from '../utils/YelpApi';

const HomePage = () => {
  const [businesses, setBusinesses] = useState([])

  const searchYelp = (business, location, sortBy) => {
    YelpAPI.search(business, location, sortBy).then(results => {
      setBusinesses(results)
    })
  }
  return (
    <div>
      <Hero searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default HomePage;
