import React, { lazy, Suspense, useEffect, useState } from "react";
import { Tabs, Spin, Alert, Card, Typography, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { MatchTabs } from "../../../utils/config";
import { getMatchDetail } from "../../../api/services/matchdetail";

const { Title, Text } = Typography;

const Info = lazy(() => import("./tabs/Info"));
const Live = lazy(() => import("./tabs/Live"));
const Scorecard = lazy(() => import("./tabs/Scorecard"));
const Squads = lazy(() => import("./tabs/Squads"));
const Overs = lazy(() => import("./tabs/Overs"));

const TabComponents = {
  info: Info,
  live: Live,
  scorecard: Scorecard,
  squads: Squads,
  overs: Overs,
};

const Match = () => {
  const { id } = useParams();

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
    if (id) {
      fetchMatchDetail(id);
    }
  }, [id]);

  if (loading) {
    return <Spin size="large" tip="Loading match info..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  if (!matchInfo) {
    return (
      <Alert
        message="No Match Info"
        description="Match data is not available"
        type="warning"
        showIcon
      />
    );
  }

  const { team1, team2, series, venue, matchStartTimestamp } = matchInfo.matchInfo;

  const matchDate = new Date(matchStartTimestamp);
  const formattedDate = matchDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = matchDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <Card className="match-details" bordered={false}>
        <Title level={2}>
          {team1.name} vs {team2.name}
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Text strong>Series:</Text> {series.name || "N/A"}
          </Col>
          <Col span={6}>
            <Text strong>Venue:</Text>{" "}
            {venue ? `${venue.name}, ${venue.city}` : "N/A"}
          </Col>
          <Col span={6}>
            <Text strong>Date & Time:</Text> {formattedDate}, {formattedTime}{" "}
            LOCAL
          </Col>
        </Row>
      </Card>

      <Tabs defaultActiveKey="scorecard">
        {MatchTabs.map((tab) => {
          const Component = TabComponents[tab.key];
          const teamsIds = tab.key === "squads" ? { team1Id: team1.id, team2Id: team2.id } : null;
          const teamsName = tab.key === "squads" ? { team1Name: team1.name, team2Name: team2.name } : null;
          return (
            <Tabs.TabPane tab={tab.label} key={tab.key}>
              <Suspense fallback={<div>Loading {tab.label}...</div>}>
                {tab.key === "squads" ? (
                  <Component matchId={id} {...teamsIds} {...teamsName}/>
                ) : (
                  <Component matchId={id} />
                )}
              </Suspense>
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default Match;
