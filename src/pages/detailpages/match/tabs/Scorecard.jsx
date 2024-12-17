import React, { useEffect, useState } from "react";
import { getMatchScorecard } from "../../../../api/services/matchscorecard";
import { Collapse, Spin, Alert } from "antd";
import InningDetails from "../../../../components/details/match/scorecard/InningDetails";

const { Panel } = Collapse;

const Scorecard = ({ matchId }) => {
  const [matchScorecard, setMatchScorecard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScorecard = async (id) => {
      setLoading(true);
      try {
        const data = await getMatchScorecard(id);
        setMatchScorecard(data.scoreCard);
      } catch (err) {
        setError("Failed to load match Scorecard.");
      }
      setLoading(false);
    };
    fetchScorecard(matchId);
  }, [matchId]);
  if (loading) return <Spin tip="Loading match info..." />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <Collapse accordion>
      {matchScorecard?.map((inning, index) => (
        <Panel
          header={`${inning.batTeamDetails.batTeamName} - ${
            inning.inningsId === 1 ? "1st Innings" : "2nd Innings"
          }`}
          key={index}
        >
          <InningDetails inningData={inning} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default Scorecard;
