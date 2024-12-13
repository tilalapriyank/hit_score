import React from "react";
import { Card, Row, Col, Button, Typography, Tooltip } from "antd";
import ImageComponent from "../image/image";

const { Text } = Typography;

const MatchCard = ({ match }) => {
  const team1Innings1 = match.matchScore?.team1Score?.inngs1?.runs || "-";
  const team1Innings2 = match.matchScore?.team1Score?.inngs2?.runs || "-";
  const team2Innings1 = match.matchScore?.team2Score?.inngs1?.runs || "-";
  const team2Innings2 = match.matchScore?.team2Score?.inngs2?.runs || "-";

  return (
    <Card hoverable className="mb-4" style={{ borderRadius: "8px" }}>
      <Row justify="space-between" align="middle">
        <Tooltip title={match.matchInfo.seriesName}>
          <Text
            strong
            style={{
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "250px",
            }}
          >
            {match.matchInfo.seriesName}
          </Text>
        </Tooltip>
        <Button size="small" type="default">
          {match.matchInfo.matchFormat}
        </Button>
      </Row>
      <Text type="secondary">{match.matchInfo.matchDesc}</Text>
      <div style={{ marginTop: "16px" }}>
        <Row justify="space-between" align="middle">
            <ImageComponent imageId={match.matchInfo.team1.imageId} width={"10%"} />
          <Col>
            <Text strong>{match.matchInfo.team1.teamName}</Text>
          </Col>
          <Col>
            <Text>{team1Innings1}</Text>
            {team1Innings2 !== "-" && (
              <Text> &nbsp;&amp;&nbsp;{team1Innings2}</Text>
            )}
          </Col>
        </Row>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginTop: "8px" }}
        >
            <ImageComponent imageId={match.matchInfo.team2.imageId} width={"10%"} />
          <Col>
            <Text strong>{match.matchInfo.team2.teamName}</Text>
          </Col>
          <Col>
            <Text>{team2Innings1}</Text>
            {team2Innings2 !== "-" && (
              <Text> &nbsp;&amp;&nbsp;{team2Innings2}</Text>
            )}
          </Col>
        </Row>
      </div>
      <Row justify="space-between" align="middle" style={{ marginTop: "16px" }}>
        <Text type="success" strong>
          {match.matchInfo.status}
        </Text>
        <Button type="primary">View Details</Button>
      </Row>
    </Card>
  );
};

export default MatchCard;
