import React from "react";
import { Card, Typography, Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const MatchHeader = ({ matchInfo }) => {
  const { team1, team2, matchDescription } = matchInfo.matchInfo;

  return (
    <Card
      className="match-header"
      bordered={false}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16} lg={18}>
          <Title level={3} style={{ color: "#1890ff", fontWeight: 600 }}>
            {team1.name} vs {team2.name} - {matchDescription}
          </Title>
        </Col>
      </Row>
    </Card>
  );
};

export default MatchHeader;
