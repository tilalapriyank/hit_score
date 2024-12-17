import React from "react";
import { Card, Divider, Typography } from "antd";

const { Title, Text } = Typography;

const ExtrasAndTotal = ({ extrasData, scoreDetails }) => {
  return (
    <Card bordered style={{ marginBottom: "1rem" }}>
      <Title level={4}>Extras</Title>
      <Text>
        <strong>No Balls:</strong> {extrasData.noBalls} |{" "}
        <strong>Wides:</strong> {extrasData.wides} | <strong>Byes:</strong>{" "}
        {extrasData.byes} | <strong>Leg Byes:</strong> {extrasData.legByes} |{" "}
        <strong>Penalty:</strong> {extrasData.penalty}
      </Text>
      <Divider />
      <Text strong>
        Total Score: {scoreDetails.runs} runs, {scoreDetails.wickets} wickets,{" "}
        {scoreDetails.overs} overs
      </Text>
    </Card>
  );
};

export default ExtrasAndTotal;
