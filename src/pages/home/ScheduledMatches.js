import React from 'react';
import MatchCard from './MatchCard'; // Reusable card component for matches

const ScheduledMatches = ({ scheduledMatches }) => {
  return (
    <section className="scheduled-matches bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Scheduled Matches</h2>
        <div className="row">
          {scheduledMatches.map((match, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduledMatches;
