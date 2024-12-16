import React from "react";
import TrendingPlayers from "../../components/players/TrendingPlayers";
import SearchBar from "../../components/players/SearchBar";

const TrendingPage = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Browse Players
      </h1>
      <SearchBar />
      <TrendingPlayers />
    </>
  );
};

export default TrendingPage;
