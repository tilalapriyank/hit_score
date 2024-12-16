import React from "react";
import { Table, Card } from "antd";

const Umpires = ({ matchInfo }) => {
  const umpireColumns = [
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Name", dataIndex: "name", key: "name" },
  ];

  const umpireData = [
    { role: "Umpire 1", name: matchInfo.matchInfo.umpire1.name },
    { role: "Umpire 2", name: matchInfo.matchInfo.umpire2.name },
    { role: "Third Umpire", name: matchInfo.matchInfo.umpire3.name },
    { role: "Match Referee", name: matchInfo.matchInfo.referee.name },
  ];

  return (
    <Card title="Umpires" style={{ marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Table columns={umpireColumns} dataSource={umpireData} pagination={false} bordered responsive />
    </Card>
  );
};

export default Umpires;
