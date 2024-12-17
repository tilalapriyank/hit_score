import React, { useEffect, useState } from "react";
import { Spin, Alert } from "antd";
import { getMatchCommentary } from "../../../../api/services/matchcommentary";
import MatchInfo from "../../../../components/details/match/commentary/MatchInfo";
import CommentaryList from "../../../../components/details/match/commentary/CommentaryList";

const Commentary = ({ matchId }) => {
  const [matchCommentary, setMatchCommentary] = useState(null);
  const [matchMini, setMatchMini] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommentary = async (id) => {
      setLoading(true);
      try {
        const data = await getMatchCommentary(id);
        setMatchCommentary(data.commentaryList);
        setMatchMini(data.miniscore);
      } catch (err) {
        setError("Failed to load match Commentary.");
      }
      setLoading(false);
    };
    fetchCommentary(matchId);
  }, [matchId]);

  if (loading) return <Spin tip="Loading match info..." />;
  if (error) return <Alert message={error} type="error" />;
  
  return (
    <div>
      <MatchInfo matchMini={matchMini} />
      <CommentaryList matchCommentary={matchCommentary}/>
    </div>
  );
};

export default Commentary;
