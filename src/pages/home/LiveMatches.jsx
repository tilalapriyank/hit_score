import React, { useState, useEffect } from "react";
import { Spin, Alert, Row, Col, Typography } from "antd";
import { getLiveMatches } from "../../api/services/livematches";
import MatchCard from "../../components/recentmatches/MatchCard";

const { Title } = Typography;

const getDistributedMatches = (matches, numColumns) => {
  const columns = Array.from({ length: numColumns }, () => []);
  let currentColumn = 0;

  matches && matches.forEach((matchDetail) => {
    columns[currentColumn].push(matchDetail);
    currentColumn = (currentColumn + 1) % numColumns;
  });

  return columns;
};

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const data = await getLiveMatches();
        setMatches(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load live matches.");
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
      </div>
    );

  if (error)
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ margin: "20px" }}
      />
    );

  const allMatches = matches && matches.typeMatches
    .flatMap((typeMatch) => typeMatch.seriesMatches.slice(0, 4))
    .filter((match) => match.seriesAdWrapper)
    .flatMap((match) => match.seriesAdWrapper.matches.slice(0, 2));

  const numColumns = 4;
  const columns = getDistributedMatches(allMatches, numColumns);

  return (
    <section style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Live Matches
      </Title>
      <Row gutter={[16, 16]}>
        {columns.map((columnMatches, columnIndex) => (
          <Col xs={24} sm={12} lg={6} key={columnIndex}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {columnMatches.map((matchDetail) => (
                <MatchCard
                  key={matchDetail.matchInfo.matchId}
                  match={matchDetail}
                />
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default LiveMatches;
