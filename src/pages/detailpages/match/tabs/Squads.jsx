import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Spin, Alert } from "antd";
import { getMatchSquad } from "../../../../api/services/matchsquad";
import SquadCard from "../../../../components/details/match/squad/SquadCard";

const { Title } = Typography;

const Squads = ({ matchId, team1Id, team2Id, team1Name, team2Name }) => {
  const [team1Squad, setTeam1Squad] = useState(null);
  const [team2Squad, setTeam2Squad] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchSquads = async () => {
      setLoading(true);
      try {
        const team1Data = await getMatchSquad(matchId, team1Id);
        const team2Data = await getMatchSquad(matchId, team2Id);

        setTeam1Squad(team1Data);
        setTeam2Squad(team2Data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load match squads.");
        setLoading(false);
      }
    };

    fetchMatchSquads();
  }, [matchId, team1Id, team2Id]);

  const renderPlayers = (players, sectionType) => {
    const sectionPlayers = players.filter((player) => {
      if (sectionType === "playingXI")
        return !player.isSupportStaff && !player.substitute;
      if (sectionType === "bench")
        return player.substitute && !player.isSupportStaff;
      if (sectionType === "supportStaff") return player.isSupportStaff;
      return false;
    });
    return sectionPlayers.length > 0 ? (
      sectionPlayers.map((player) => (
        <Col
          key={player.id}
          xs={24} sm={12} md={8} lg={6}
          style={{ padding: "10px" }}
        >
          <SquadCard player={player} />
        </Col>
      ))
    ) : (
      <p>No players in this section.</p>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <Spin size="large" tip="Loading match info..." />
      ) : error ? (
        <Alert message={error} type="error" />
      ) : (
        <>
          {/* Display team names */}
          <Row gutter={24} justify="center" style={{ marginBottom: "20px" }}>
            <Col xs={24} sm={11} style={{ textAlign: "center" }}>
              <Title level={4}>{team1Name}</Title>
            </Col>
            <Col xs={24} sm={11} style={{ textAlign: "center" }}>
              <Title level={4}>{team2Name}</Title>
            </Col>
          </Row>

          {/* Playing XI */}
          <Row justify="center">
            <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
              Playing XI
            </Title>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team1Squad?.players["playing XI"] ? (
                renderPlayers(team1Squad.players["playing XI"], "playingXI")
              ) : (
                <p>Loading...</p>
              )}
            </Col>

            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team2Squad?.players["playing XI"] ? (
                renderPlayers(team2Squad.players["playing XI"], "playingXI")
              ) : (
                <p>Loading...</p>
              )}
            </Col>
          </Row>

          {/* Bench */}
          <Row justify="center">
            <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
              Bench
            </Title>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team1Squad?.players.bench ? (
                renderPlayers(team1Squad.players.bench, "bench")
              ) : (
                <p>Loading...</p>
              )}
            </Col>

            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team2Squad?.players.bench ? (
                renderPlayers(team2Squad.players.bench, "bench")
              ) : (
                <p>Loading...</p>
              )}
            </Col>
          </Row>

          {/* Support Staff */}
          <Row justify="center">
            <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
              Support Staff
            </Title>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team1Squad?.players.bench ? (
                renderPlayers(team1Squad.players.bench, "supportStaff")
              ) : (
                <p>Loading...</p>
              )}
            </Col>

            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              {team2Squad?.players.bench ? (
                renderPlayers(team2Squad.players.bench, "supportStaff")
              ) : (
                <p>Loading...</p>
              )}
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Squads;
