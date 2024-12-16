import React from "react";
import { Table, Card } from "antd";

const MatchDetails = ({ matchInfo }) => {
  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Time", dataIndex: "time", key: "time" },
    { title: "Venue", dataIndex: "venue", key: "venue" },
    { title: "Format", dataIndex: "format", key: "format" },
  ];

  const data = [
    {
      key: "1",
      date: new Date(matchInfo.matchInfo.matchStartTimestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: new Date(matchInfo.matchInfo.matchStartTimestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      venue: `${matchInfo.matchInfo.venue.name}, ${matchInfo.matchInfo.venue.city}`,
      format: matchInfo.matchInfo.matchFormat,
    },
  ];

  return (
    <Card title="Match Details" style={{ marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Table columns={columns} dataSource={data} pagination={false} bordered responsive />
    </Card>
  );
};

export default MatchDetails;
