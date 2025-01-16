import React from "react";
import {  Card, Collapse } from "antd";

const { Panel } = Collapse;

const PlayingTeams = ({ matchInfo }) => {
  const renderPlayerDetails = (team) => {
    if (!team || !Array.isArray(team.playerDetails)) {
      return "No players listed";
    }

    const playingXI = team.playerDetails
      .filter((player) => !player.substitute && !player.isSupportStaff)
      .map((player) => `${player.fullName} ${player.captain ? "(Captain)" : ""}`)
      .join(", ");

    const benchPlayers = team.playerDetails
      .filter((player) => player.substitute)
      .map((player) => player.fullName)
      .join(", ");

    const supportStaff = team.playerDetails
      .filter((player) => player.isSupportStaff)
      .map((player) => player.fullName)
      .join(", ");

    return (
      <div>
        <strong>Playing XI: </strong>
        {playingXI || "No players listed"}
        <br />
        <strong>Bench Players: </strong>
        {benchPlayers || "No bench players listed"}
        <br />
        <strong>Support Staff: </strong>
        {supportStaff || "No support staff listed"}
      </div>
    );
  };

  return (
    <Card title="Playing Teams" style={{ marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Collapse defaultActiveKey={['1', '2']}>
        <Panel header={matchInfo.matchInfo.team1.name} key="1">
          {renderPlayerDetails(matchInfo.matchInfo.team1)}
        </Panel>
        <Panel header={matchInfo.matchInfo.team2.name} key="2">
          {renderPlayerDetails(matchInfo.matchInfo.team2)}
        </Panel>
      </Collapse>
    </Card>
  );
};

export default PlayingTeams;
