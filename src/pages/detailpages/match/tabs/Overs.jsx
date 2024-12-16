import React, { useEffect, useState } from "react";

const Overs = ({ matchId }) => {
  const [matchInfo, setMatchInfo] = useState(null);

  useEffect(() => {
    fetch(`/api/match/${matchId}`)
      .then((response) => response.json())
      .then((data) => setMatchInfo(data));
  }, [matchId]);

  return (
    <div>
      {matchInfo ? (
        <div>
          <h2>{matchInfo.title}</h2>
          <p>{matchInfo.description}</p>
        </div>
      ) : (
        <p>Loading match info...</p>
      )}
    </div>
  );
};

export default Overs;