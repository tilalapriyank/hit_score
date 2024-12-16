import React, { useEffect, useState } from "react";
import { getMatchDetail } from "../../../api/services/matchdetail";
import { Spin, Alert, Card, Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

const Details = ({ matchId }) => {
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
    if (matchId) {
      fetchMatchDetail(matchId);
    }
  }, [matchId]);

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

  const { team1, team2, series, venue, matchStartTimestamp } =
    matchInfo.matchInfo;

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
  );
};

export default Details;
