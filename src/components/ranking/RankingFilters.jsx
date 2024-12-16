import React from "react";
import { Select, Row, Col } from "antd";

const { Option } = Select;

const RankingFilters = ({
  isWomen,
  setIsWomen,
  selectedFormat,
  setSelectedFormat,
  selectedType,
  setSelectedType,
}) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Select
            value={selectedType}
            onChange={setSelectedType}
            style={{ width: "100%" }}
            placeholder="Select Type"
            options={[
              { label: "Batsman", value: "batsmen" },
              { label: "Bowler", value: "bowlers" },
              { label: "Allrounder", value: "allrounders" },
              { label: "Teams", value: "teams" },
            ]}
          >
            <Option value="batsmen">Batsman</Option>
            <Option value="bowlers">Bowler</Option>
            <Option value="allrounders">Allrounder</Option>
            <Option value="teams">Teams</Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Select
            value={selectedFormat}
            onChange={setSelectedFormat}
            style={{ width: "100%" }}
            placeholder="Select Format"
            options={[
              { label: "ODI", value: "odi" },
              { label: "Test", value: "test" },
              { label: "T20I", value: "t20" },
            ]}
          >
            <Option value="odi">ODI</Option>
            <Option value="test">Test</Option>
            <Option value="t20">T20I</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default RankingFilters;
