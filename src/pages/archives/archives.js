import React, { useState, useEffect } from "react";
import { getArchives } from "../../api/services/archives";
import { Select, Spin, Typography, Row, Col, Tabs } from "antd";
import ArchivesItem from "../../components/archives/ArchivesItem"; 

const { Title } = Typography;
const { TabPane } = Tabs;

const Archives = () => {
  const [archivesData, setArchivesData] = useState({ series: [] });
  const [type, setType] = useState("international");
  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to current year
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArchives = async () => {
      setLoading(true);
      try {
        const data = await getArchives(type, year);
        setArchivesData(data.seriesMapProto[0] || { series: [] }); // Handle empty series data gracefully
      } catch (error) {
        setError("Error fetching archives.");
        console.error("Error fetching archives:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArchives();
  }, [type, year]);

  // Generate year options from 1877 to current year
  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1877; i <= currentYear; i++) {
      years.push(i.toString());
    }
    return years;
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Archives</Title>

      <Tabs defaultActiveKey={type} onChange={(key) => setType(key)}>
        <TabPane tab="International" key="international" />
        <TabPane tab="Domestic" key="domestic" />
        <TabPane tab="Women" key="women" />
        <TabPane tab="League" key="league" />
      </Tabs>

      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col span={8}>
          <Title level={4}>Select Year</Title>
          <Select
            defaultValue={year}
            onChange={(value) => setYear(value)}
            style={{ width: "100%" }}
          >
            {generateYears().map((yearOption) => (
              <Select.Option key={yearOption} value={yearOption}>
                {yearOption}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <Spin size="large" tip="Loading archives..." />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Row gutter={16}>
          {archivesData.series && archivesData.series.length > 0 ? (
            archivesData.series.map((item) => (
              <Col span={8} key={item.id} style={{ marginBottom: "16px" }}>
                <ArchivesItem item={item} /> {/* Use ArchivesItem for each archive */}
              </Col>
            ))
          ) : (
            <div>No archives available.</div>
          )}
        </Row>
      )}
    </div>
  );
};

export default Archives;
