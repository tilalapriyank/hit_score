import React from "react";
import { Card, Row, Col, Tag, Typography, Divider, Table } from "antd";

const { Text, Title } = Typography;

const MatchInfo = ({ matchMini }) => {
  if (!matchMini) return null;

  const {
    batsmanStriker,
    batsmanNonStriker,
    bowlerStriker,
    bowlerNonStriker,
    currentRunRate: crr,
    lastWicket: lastWkt,
    partnerShip: partnership,
    recentOvsStats: curOvsStats,
    batTeam,
    matchScoreDetails,
    latestPerformance,
    matchUdrs,
  } = matchMini;

  // Extracting innings scores for both teams
  const teamScores = matchScoreDetails.inningsScoreList.map((score, index) => (
    <Row key={index} justify="space-between" align="middle">
      <Col>
        <Text>{score.batTeamName}</Text>
      </Col>
      <Col style={{ textAlign: "right" }}>
        <Text strong>
          {score.score}/{score.wickets} ({score.overs})
        </Text>
      </Col>
    </Row>
  ));

  // Find the current batting team
  const currentBattingTeam =
    matchScoreDetails.inningsScoreList.find(
      (score) => score.batTeamId === batTeam.teamId
    ) || matchScoreDetails.inningsScoreList[0];

  const battingTeamOvers = currentBattingTeam.overs;

  const formattedOvers = battingTeamOvers.toFixed(1);

  const team1 = matchScoreDetails.inningsScoreList.find(
    (team) => team.batTeamId === udrs.team1Id
  );
  const team2 = matchScoreDetails.inningsScoreList.find(
    (team) => team.batTeamId === udrs.team2Id
  );
  return (
    <Card
      bordered={false}
      title={
        <span>
          {currentBattingTeam.batTeamName} {batTeam.teamScore}/
          {batTeam.teamWkts} ({formattedOvers}){" "}
          <Tag color="blue" style={{ fontSize: "12px" }}>
            CRR: {crr}
          </Tag>
          <br />
          <span style={{ color: "red" }}>{matchScoreDetails.customStatus}</span>
        </span>
      }
      style={{
        marginBottom: 10,
        padding: 10,
        background: "#fafafa",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row gutter={16}>
        {/* Left Side - Key Stats Section */}
        <Col span={12}>
          <Row gutter={16}>
            {/* Batsman Table */}
            <Col span={24}>
              <Title level={5}>Batsman</Title>
              <Table
                columns={[
                  { title: "Batsman", dataIndex: "name", key: "name" },
                  { title: "Runs", dataIndex: "runs", key: "runs" },
                  { title: "Balls", dataIndex: "balls", key: "balls" },
                  { title: "Fours", dataIndex: "fours", key: "fours" },
                  { title: "Six", dataIndex: "six", key: "six" },
                  { title: "SR", dataIndex: "strikeRate", key: "strikeRate" },
                ]}
                dataSource={[
                  {
                    key: "1",
                    name: batsmanStriker.batName,
                    runs: batsmanStriker.batRuns,
                    balls: batsmanStriker.batBalls,
                    fours: batsmanStriker.batFours,
                    six: batsmanStriker.batSixes,
                    strikeRate: batsmanStriker.batStrikeRate,
                  },
                  {
                    key: "2",
                    name: batsmanNonStriker.batName,
                    runs: batsmanNonStriker.batRuns,
                    balls: batsmanNonStriker.batBalls,
                    fours: batsmanNonStriker.batFours,
                    six: batsmanNonStriker.batSixes,
                    strikeRate: batsmanNonStriker.batStrikeRate,
                  },
                ]}
                pagination={false}
                size="small"
                bordered
              />
            </Col>

            {/* Bowler Table */}
            <Col span={24}>
              <Title level={5}>Bowler</Title>
              <Table
                columns={[
                  { title: "Bowler", dataIndex: "name", key: "name" },
                  { title: "Overs", dataIndex: "overs", key: "overs" },
                  { title: "Wickets", dataIndex: "wickets", key: "wickets" },
                  { title: "Runs", dataIndex: "runs", key: "runs" },
                  { title: "Econ", dataIndex: "economy", key: "economy" },
                ]}
                dataSource={[
                  {
                    key: "1",
                    name: bowlerStriker.bowlName,
                    overs: bowlerStriker.bowlOvs,
                    wickets: bowlerStriker.bowlWkts,
                    runs: bowlerStriker.bowlRuns,
                    economy: bowlerStriker.bowlEcon,
                  },
                  {
                    key: "2",
                    name: bowlerNonStriker.bowlName,
                    overs: bowlerNonStriker.bowlOvs,
                    wickets: bowlerNonStriker.bowlWkts,
                    runs: bowlerNonStriker.bowlRuns,
                    economy: bowlerNonStriker.bowlEcon,
                  },
                ]}
                pagination={false}
                size="small"
                bordered
              />
            </Col>
            <Col span={24}>
              <Divider />
              <Text type="default" style={{ fontSize: "14px" }}>
                Recent Overs: {curOvsStats}
              </Text>
            </Col>
          </Row>
        </Col>

        {/* Right Side - Key Stats Section */}
        <Col span={12}>
          <Title level={5}>Team Scores</Title>
          {teamScores}
          <Divider />
          <Title level={5}>Key Stats</Title>

          {/* Partnership */}
          <Row gutter={10}>
            <Col span={12}>
              <Text strong>Partnership:</Text> {partnership.runs}
              {`(${partnership.balls})`}
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Text strong>Last Wkt:</Text> {lastWkt}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Text strong>{latestPerformance.label}:</Text>{" "}
              {latestPerformance.runs} Runs, {latestPerformance.wkts} Wickets
            </Col>
          </Row>
          {matchUdrs && (
            <Row gutter={10}>
              <Col span={12}>
                <Text strong>UDRS - {team1?.batTeamShortName}: </Text>
                {matchUdrs.team1Remaining ?? "0"} Remaining,{" "}
                {matchUdrs.team1Successful ?? "0"} Successful,{" "}
                {matchUdrs.team1Unsuccessful ?? "0"} Unsuccessful
              </Col>
              <Col span={12}>
                <Text strong>{team2?.batTeamShortName}: </Text>
                {matchUdrs.team2Remaining ?? "0"} Remaining,{" "}
                {matchUdrs.team2Successful ?? "0"} Successful,{" "}
                {matchUdrs.team2Unsuccessful ?? "0"} Unsuccessful
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default MatchInfo;
