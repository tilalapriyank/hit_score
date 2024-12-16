import React from "react";
import { Card, Typography, Tag } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const ScheduleMatchCard = ({ match }) => {
  const {
    matchId,
    matchDesc,
    matchFormat,
    startDate,
    team1,
    team2,
    venueInfo,
  } = match;

  const matchTime = new Date(Number(startDate)).toLocaleTimeString();

  return (
    <Link to={`/match-details/${matchId}`}>
      <Card
        hoverable
        style={{
          padding: "15px 0px ",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tag color="blue" style={{ position: "absolute", top: 10, right: 10 }}>
          {matchFormat}
        </Tag>
        <Text
          strong
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontSize: "16px",
          }}
        >
          {matchDesc}
        </Text>
        <Text>
          {team1.teamName} vs {team2.teamName}
        </Text>
        <br />
        <Text>
          {venueInfo.ground}, {venueInfo.city}
        </Text>
        <br />
        <Text>{matchTime}</Text>
      </Card>
    </Link>
  );
};

export default ScheduleMatchCard;
