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
    crr,
    lastWkt,
    partnership,
    oversRem,
    custStatus,
    inningsScores,
    curOvsStats,
    performance,
    udrs,
    batTeamScore,
  } = matchMini;

  // Extracting innings scores for both teams
  const teamScores = inningsScores.inningsScore.map((score, index) => (
    <Row key={index} justify="space-between" align="middle">
      <Col>
        <Text>{score.batTeamShortName}</Text>
      </Col>
      <Col style={{ textAlign: "right" }}>
        <Text strong>
          {score.runs}/{score.wickets} ({score.overs})
        </Text>
      </Col>
    </Row>
  ));

  // Find the current batting team based on `batTeamId`
  const currentBattingTeam =
    inningsScores.inningsScore.find(
      (score) => score.batTeamId === batTeamScore.teamId
    ) || inningsScores.inningsScore[0]; // Fallback if not found

  const battingTeamOvers = currentBattingTeam.overs; // Extract overs from current batting team

  // Format overs as "62.2" if it's in "X.Y" format
  const overs = battingTeamOvers.toString();
  const formattedOvers = overs.replace(".", ".");

  const team1 = inningsScores.inningsScore.find(
    (team) => team.batTeamId === udrs.team1Id
  );
  const team2 = inningsScores.inningsScore.find(
    (team) => team.batTeamId === udrs.team2Id
  );

  return (
    <Card
      bordered={false}
      title={
        <span>
          {currentBattingTeam.batTeamShortName} {batTeamScore.teamScore}/
          {batTeamScore.teamWkts} ({formattedOvers}){" "}
          <Tag color="blue" style={{ fontSize: "12px" }}>
            CRR: {crr}
          </Tag>
          <br />
          <span style={{ color: "red" }}>{custStatus}</span>
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
                    name: batsmanStriker.name,
                    strikeRate: batsmanStriker.strkRate,
                    runs: batsmanStriker.runs || 0,
                    balls: batsmanStriker.balls,
                    fours: batsmanStriker.fours || 0,
                    six: batsmanStriker.six || 0,
                  },
                  {
                    key: "2",
                    name: batsmanNonStriker.name,
                    strikeRate: batsmanNonStriker.strkRate,
                    runs: batsmanNonStriker.runs || 0,
                    balls: batsmanNonStriker.balls,
                    fours: batsmanNonStriker.fours || 0,
                    six: batsmanNonStriker.six || 0,
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
                    name: bowlerStriker.name,
                    overs: bowlerStriker.overs,
                    wickets: bowlerStriker.wickets,
                    runs: bowlerStriker.runs,
                    economy: bowlerStriker.economy,
                  },
                  {
                    key: "2",
                    name: bowlerNonStriker.name,
                    overs: bowlerNonStriker.overs,
                    wickets: bowlerNonStriker.wickets,
                    runs: bowlerNonStriker.runs,
                    economy: bowlerNonStriker.economy,
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
              <Text strong>Partnership:</Text> {partnership}
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Text strong>Last Wkt:</Text> {lastWkt}
            </Col>
          </Row>

          <Row gutter={10}>
            <Col span={12}>
              <Text strong>Ovs Left:</Text> {oversRem}
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Text strong>Last 10 Ovs:</Text>{" "}
              {performance
                ? `${performance[0].runs} runs, ${performance[0].wickets} wickets`
                : "N/A"}
            </Col>
          </Row>

          {/* UDRS */}
          {udrs && (
            <Row gutter={10}>
              <Col span={12}>
                <Text strong>UDRS - {team1?.batTeamShortName}:{" "}</Text>
                {udrs.team1Remaining ?? "0"} Remaining,{" "}
                {udrs.team1Unsuccessful ?? "0"} Unsuccessful
              </Col>
              <Col span={12}>
                <Text strong>{team2?.batTeamShortName}:{" "}</Text>
                {udrs.team2Remaining ?? "0"} Remaining,{" "}
                {udrs.team2Unsuccessful ?? "0"} Unsuccessful
              </Col>
            </Row>
          )}

          {/* Team Scores */}
        </Col>
      </Row>
    </Card>
  );
};

export default MatchInfo;
