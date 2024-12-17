import React from "react";
import { Table } from "antd";

const PlayerStats = ({ data, type }) => {
  const columns = {
    batsmen: [
      { title: "Player", dataIndex: "name", key: "name" },
      { title: "Status", dataIndex: "status", key: "status" },
      { title: "Runs", dataIndex: "runs", key: "runs" },
      { title: "Balls", dataIndex: "balls", key: "balls" },
      { title: "4s", dataIndex: "fours", key: "fours" },
      { title: "6s", dataIndex: "sixes", key: "sixes" },
      { title: "SR", dataIndex: "strikeRate", key: "strikeRate" },
    ],
    bowlers: [
      { title: "Bowler", dataIndex: "name", key: "name" },
      { title: "Overs", dataIndex: "overs", key: "overs" },
      { title: "Maidens", dataIndex: "maidens", key: "maidens" },
      { title: "Runs", dataIndex: "runs", key: "runs" },
      { title: "Wickets", dataIndex: "wickets", key: "wickets" },
      { title: "Economy", dataIndex: "economy", key: "economy" },
    ],
  };
  const filteredData = data.filter((item) => item.status !== null);

  return (
    <Table
      dataSource={filteredData}
      columns={columns[type]}
      pagination={false}
    />
  );
};

export default PlayerStats;
