import React, { useEffect, useState } from "react";
import { getMatchDetail } from "../../../../api/services/matchdetail";
import { Spin, Alert } from "antd";
import MatchHeader from "../../../../components/details/match/info/MatchHeader";
import MatchDetails from "../../../../components/details/match/info/MatchDetails";
import PlayingTeams from "../../../../components/details/match/info/PlayingTeams";
import Umpires from "../../../../components/details/match/info/Umpires";
import VenueGuide from "../../../../components/details/match/info/VenueGuide";
import BroadcastDetails from "../../../../components/details/match/info/BroadcastDetails";

const Info = ({ matchId }) => {
  const [matchInfo, setMatchInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchDetail = async (id) => {
      setLoading(true);
      try {
        const data = await getMatchDetail(id);
        setMatchInfo(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load match details.");
        setLoading(false);
      }
    };
    fetchMatchDetail(matchId);
  }, [matchId]);

  if (loading) {
    return <Spin size="large" tip="Loading match info..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <div className="match-info">
      <MatchHeader matchInfo={matchInfo} />
      <MatchDetails matchInfo={matchInfo} />
      <PlayingTeams matchInfo={matchInfo} />
      <Umpires matchInfo={matchInfo} />
      <VenueGuide matchInfo={matchInfo} />
      <BroadcastDetails matchInfo={matchInfo} />
    </div>
  );
};

export default Info;
