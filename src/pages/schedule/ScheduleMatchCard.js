import React from "react";
import { Card, Col, Row, Typography, Tag } from "antd";
import { TeamOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ScheduleMatchCard = ({ match }) => {
  const { matchId, seriesName, matchDesc, matchFormat, startDate, team1, team2, venueInfo } = match;

  return (
    <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "20px" }}>
      <Card hoverable>
        <Title level={4}>{seriesName}</Title>
        <Text strong>Match Description: </Text>
        <Text>{matchDesc}</Text>
        <div style={{ marginTop: 10 }}>
          <Text>
            <TeamOutlined style={{ marginRight: 5 }} />
            {team1.teamName} vs {team2.teamName}
          </Text>
          <br />
          <Text>
            <EnvironmentOutlined style={{ marginRight: 5 }} />
            {venueInfo.ground}, {venueInfo.city}, {venueInfo.country}
          </Text>
          <br />
          <Text>
            <ClockCircleOutlined style={{ marginRight: 5 }} />
            {new Date(Number(startDate)).toLocaleString()}
          </Text>
          <br />
          <Tag color="blue">{matchFormat}</Tag>
        </div>
      </Card>
    </Col>
  );
};

export default ScheduleMatchCard;
