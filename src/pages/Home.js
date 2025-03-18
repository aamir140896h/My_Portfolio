import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../data/seo";

const Home = () => {
  const currSEO = SEO.find((item) => item.page === "home");

  return (
    <Helmet>
      <title>Home - My Awesome Website</title>
      <meta name="description" content={currSEO.description} />
      <meta name="keywords" content={currSEO.keywords} />
    </Helmet>
  );
};

export default Home;
