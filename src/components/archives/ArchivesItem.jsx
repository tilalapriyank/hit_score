import React from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom"; // Use Link for navigation

const { Title } = Typography;

// Function to convert timestamp to a readable date string
const convertToDate = (timestamp) => {
  const date = new Date(parseInt(timestamp, 10)); // Convert timestamp to Date object
  const options = { month: "short", day: "2-digit" }; // Format as "Aug 05"
  return date.toLocaleDateString("en-US", options); // Format the date as per the local date format
};

const ArchivesItem = ({ item }) => {
  // Convert start and end date to desired format
  const startDate = convertToDate(item.startDt);
  const endDate = convertToDate(item.endDt);

  return (
    <Link to={`/series-details/${item.id}`}>
      <Card
        hoverable
        style={{
          cursor: "pointer",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5} style={{ margin: 0 }}>
            {item.name}
          </Title>
          <span style={{ marginLeft: "auto", fontSize: "14px", color: "#888" }}>
            {startDate} - {endDate}
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default ArchivesItem;
