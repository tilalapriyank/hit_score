import React, { useEffect, useState } from "react";
import { getMatchOvers } from "../../../../api/services/matchovers";
import MatchInfo from "./MatchInfo";
import MatchOvers from "./MatchOvers";
import { Spin, Alert } from "antd";

const Overs = ({ matchId }) => {
  const [matchOvers, setMatchOvers] = useState(null);
  const [matchMini, setMatchMini] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOvers = async (id) => {
      setLoading(true);
      try {
        const data = await getMatchOvers(id);
        setMatchOvers(data.overSepList);
        setMatchMini(data.miniscore);
      } catch (error) {
        setError("Failed to load match Scorecard.");
      }
      setLoading(false);
    };
    fetchOvers(matchId);
  }, [matchId]);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;
  
  return (
    <div>
      <MatchInfo matchMini={matchMini} />
      <MatchOvers matchOvers={matchOvers} />
    </div>
  );
};

export default Overs;
