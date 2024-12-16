import React from "react";
import { Row, Col, Avatar } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const RankingTable = ({ data, selectedType }) => {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Row
        gutter={[16, 16]}
        style={{
          fontWeight: "bold",
          borderBottom: "2px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        <Col span={4}>Rank</Col>
        {selectedType !== "teams" && <Col span={1}></Col>}
        <Col span={selectedType === "teams" ? 8 : 6}>
          {selectedType === "teams" ? "Team" : "Player"}
        </Col>
        {selectedType === "teams" && <Col span={4}>Rating</Col>}
        <Col span={4}>Points</Col>
      </Row>

      {data.map((record) => (
        <Row
          gutter={[16, 16]}
          key={record.rank}
          style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
        >
          <Col span={4}>{record.rank}</Col>
          {selectedType !== "teams" && (
            <Col span={1}>
              {record.trend === "Flat" ? (
                "-"
              ) : record.trend === "Up" ? (
                <ArrowUpOutlined style={{ color: "green" }} />
              ) : (
                <ArrowDownOutlined style={{ color: "red" }} />
              )}
            </Col>
          )}
          <Col
            span={selectedType === "teams" ? 8 : 6}
            style={{ display: "flex", alignItems: "center" }}
          >
            {selectedType !== "teams" && (
              <Avatar
                src={`https://example.com/images/${record.faceImageId}.jpg`}
                size={40}
                style={{ marginRight: 10 }}
              />
            )}
            <div>
              {selectedType === "teams" ? record.name : record.name}
              <br />
                {selectedType === "teams" ? record.country : record.country}
            </div>
          </Col>
          {selectedType === "teams" && <Col span={4}>{record.rating}</Col>}
          <Col span={4}>{record.points}</Col>
        </Row>
      ))}
    </div>
  );
};

export default RankingTable;
