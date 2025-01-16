import React from "react";
import { Card, Typography  } from "antd";
import PlayerStats from "./PlayerStats";
import Partnerships from "./Partnerships";
import ExtrasAndTotal from "./ExtrasAndTotal";
import FallOfWickets from "./FallOfWickets";

const { Title } = Typography;

const InningDetails = ({ inningData }) => {
  const {
    batTeamDetails,
    bowlTeamDetails,
    partnershipsData,
    extrasData,
    scoreDetails,
    wicketsData,
  } = inningData;

  const batsmen = Object.values(batTeamDetails.batsmenData).map((player) => ({
    key: player.batName,
    name: player.batName,
    runs: player.runs || 0,
    balls: player.balls || 0,
    fours: player.fours || 0,
    sixes: player.sixes || 0,
    strikeRate: player.strikeRate || 0,
    status: player.outDesc || null,
  }));

  const bowlers = Object.values(bowlTeamDetails.bowlersData).map((bowler) => ({
    key: bowler.bowlName,
    name: bowler.bowlName,
    overs: bowler.overs,
    maidens: bowler.maidens,
    runs: bowler.runs,
    wickets: bowler.wickets,
    economy: bowler.economy,
  }));

  const partnership = Object.values(partnershipsData).map((partner) => ({
    player1name: partner.bat1Name,
    player1runs: partner.bat1Runs,
    player2name: partner.bat2Name,
    player2runs: partner.bat2Runs,
    totalruns: partner.totalRuns,
    totalballs: partner.totalBalls,
  }));

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      {/* Batsmen Table */}
      <Card bordered style={{ marginBottom: "1rem" }}>
        <Title level={4}>Batsmen</Title>
        <PlayerStats data={batsmen} type="batsmen" />
      </Card>

      {/* Extras and Total */}
      <ExtrasAndTotal extrasData={extrasData} scoreDetails={scoreDetails} />

      {/* Bowlers Table */}
      <Card bordered style={{ marginBottom: "1rem" }}>
        <Title level={4}>Bowlers</Title>
        <PlayerStats data={bowlers} type="bowlers" />
      </Card>

      {/* Fall of Wickets */}
      <FallOfWickets wicketsData={wicketsData} />

      {/* Partnerships */}
      <Partnerships partnerships={partnership} />
    </div>
  );
};

export default InningDetails;
