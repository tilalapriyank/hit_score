import React, { useState, useEffect } from "react";
import { getRecentMatches } from "../../api/services/recentMatches"; // Import the getRecentMatches function
import MatchCard from "./MatchCard"; // Assuming you have a MatchCard component to display individual match details

const RecentMatches = () => {
  const [matches, setMatches] = useState([]); // State to store recent matches
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const data = await getRecentMatches();
        setMatches(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (err) {
        setError("Failed to load recent matches."); // Error handling
        setLoading(false); // Stop loading even in case of error
      }
    };

    fetchMatches(); // Fetch the data when the component mounts
  }, []); // Empty dependency array ensures the fetch runs only once when the component mounts

  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>{error}</div>; // Show error message if there was an issue
  console.log(matches);
  return (
    <section className="recent-matches py-5">
      <div className="container">
        <h2 className="text-center mb-4">Recent Matches</h2>
        <div className="row">
          {matches.map((match, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <MatchCard match={match} />{" "}
              {/* Pass each match data to MatchCard component */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentMatches;
