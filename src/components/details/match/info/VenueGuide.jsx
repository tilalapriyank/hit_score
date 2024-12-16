import React from "react";
import { Table, Card } from "antd";

const VenueGuide = ({ matchInfo }) => {
  const venueColumns = [
    { title: "Attribute", dataIndex: "attribute", key: "attribute" },
    { title: "Details", dataIndex: "details", key: "details" },
  ];

  const venueData = [
    { attribute: "Stadium Name", details: matchInfo.venueInfo.knownAs },
    { attribute: "City", details: matchInfo.venueInfo.city },
    { attribute: "Capacity", details: matchInfo.venueInfo.capacity || "N/A" },
    { attribute: "Ends", details: matchInfo.venueInfo.ends || "No report available" },
    { attribute: "Host to", details: matchInfo.venueInfo.homeTeam || "No report available" },
  ];

  return (
    <Card title="Venue Information" style={{ marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Table columns={venueColumns} dataSource={venueData} pagination={false} bordered responsive />
    </Card>
  );
};

export default VenueGuide;
