import React from "react";
import { List, Card, Row, Col, Avatar,  Tooltip } from "antd";

const MatchOvers = ({ matchOvers }) => {
  if (!matchOvers) return null;

  const ballColor = (ballResult) => {
    switch (ballResult) {
      case "0":
        return "#959595"; 
      case "1":
        return "#8bb95c"; 
      case "4":
        return "#0579bc"; 
      case "6":
        return "#c569e6";
      case "W":
        return "#e90b37";
      default:
        return "#a5660f";
    }
  };

  return (
    <Card
      title="Overs Summary"
      style={{
        marginTop: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "15px",
      }}
    >
      <List
        dataSource={matchOvers.overSep}
        renderItem={(item) => (
          <List.Item
            style={{ padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}
          >
            <Row gutter={16} style={{ width: "100%" }}>
              <Col
                span={12}
                style={{
                  borderRight: "1px solid #f0f0f0",
                  paddingRight: "10px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Over {item.overNum} - {item.runs} Runs
                </h4>
                <p style={{ color: "#777" }}>{item.battingTeamName}</p>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {item.score}-{item.wickets}
                </div>
              </Col>

              <Col span={12}>
                <h4
                  style={{
                    marginBottom: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {item.ovrBowlNames[0]} to {item.ovrBatNames.join(", ")}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {item.overSummary
                    .split(" ")
                    .slice(0, 6)
                    .map((ballResult, index) => (
                      <Tooltip
                        title={`Ball ${index + 1}: ${ballResult}`}
                        placement="top"
                        key={index}
                      >
                        <Avatar
                          size={32}
                          style={{
                            backgroundColor: ballColor(ballResult),
                            color: "#fff",
                            fontSize: "14px",
                            marginRight: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          {ballResult}
                        </Avatar>
                      </Tooltip>
                    ))}
                </div>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MatchOvers;
