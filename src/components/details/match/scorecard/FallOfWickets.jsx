import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const FallOfWickets = ({ wicketsData }) => {
  if (!wicketsData || Object.keys(wicketsData).length === 0) return null;

  return (
    <Card bordered style={{ marginBottom: "1rem" }}>
      <Title level={4} className="bg-secondary p-2 text-white">
        Fall of Wickets
      </Title>
      <p>
        {Object.values(wicketsData)
          .map(
            (item) =>
              `${item.batName}: ${item.wktRuns}-${item.wktNbr} (${item.wktOver} overs)`
          )
          .join(" | ")}
      </p>
    </Card>
  );
};

export default FallOfWickets;
