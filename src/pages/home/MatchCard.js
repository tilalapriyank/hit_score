import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="series-name">{match.seriesName}</h6>
          <span className="format-name btn btn-secondary">{match.matchFormat}</span>
        </div>
        <p className="match-number">{match.matchDesc}</p>
        <div className="team-1 d-flex">
          <img src={match.team1.imageUrl} alt={match.team1.name} width="50" />  {/* Assuming image URLs */}
          <p className="team-1-name mx-2">{match.team1.name}</p>
          <div className="match-score">
            <p>{match.team1.score}</p>
          </div>
        </div>
        <div className="team-2 d-flex my-1">
          <img src={match.team2.imageUrl} alt={match.team2.name} width="50" />
          <p className="team-2-name mx-2">{match.team2.name}</p>
          <div className="match-score">
            <p>{match.team2.score}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <p className="match-status fw-bold">{match.status}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
