import React from "react";
import { Card, Progress, Typography } from "antd";

const { Text, Title } = Typography;

const Partnerships = ({ partnerships }) => {
  return (
    <Card bordered>
      <Title level={4}>Partnerships</Title>
      {partnerships.map((partner, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Text strong>
              {partner.player1name} ({partner.player1runs})
            </Text>

            <div style={{ flexGrow: 1, position: "relative" }}>
              <Progress
                percent={(partner.player1runs / partner.totalruns) * 100}
                strokeColor="blue" 
                showInfo={false}
                style={{
                  position: "absolute",
                  width: "50%",
                  right: "50%", 
                  transform: "scaleX(-1)", 
                }}
              />

              <Progress
                percent={(partner.player2runs / partner.totalruns) * 100}
                strokeColor="red" 
                showInfo={false}
                style={{
                  position: "absolute",
                  width: "50%",
                  left: "50%", 
                }}
              />
            </div>

            <Text strong>
              {partner.player2name} ({partner.player2runs})
            </Text>
          </div>

          <div style={{ marginTop: "0.5rem", textAlign: "center" }}>
            <Text type="default">
              {partner.totalruns} Runs, {partner.totalballs} Balls
            </Text>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Partnerships;
