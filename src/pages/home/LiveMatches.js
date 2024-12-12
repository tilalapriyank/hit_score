import React from 'react';
import MatchCard from './MatchCard'; // Reusable card component for matches

const LiveMatches = ({ liveMatches }) => {
  return (
    <section className="live-matches bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Live Matches</h2>
        <div className="row">
          {liveMatches.map((match, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
