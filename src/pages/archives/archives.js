import React, { useState, useEffect } from "react";
import { getArchives } from "../../api/services/archives";
import { Select, Spin, Table, Typography, Row, Col, Tabs, Card } from "antd";

const { Title } = Typography;
const { TabPane } = Tabs;

const Archives = () => {
  const [archivesData, setArchivesData] = useState([]);
  const [type, setType] = useState("international");
  const [year, setYear] = useState("2024");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArchives = async () => {
      setLoading(true);
      try {
        const data = await getArchives(type, year);
        setArchivesData(data);
      } catch (error) {
        setError("Error fetching archives.");
        console.error("Error fetching archives:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArchives();
  }, [type, year]);

  // Columns for the table
  const columns = [
    {
      title: "Match",
      dataIndex: "matchName",
      key: "matchName",
      render: (text) => <a href={`/match/${text}`}>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "matchDate",
      key: "matchDate",
    },
    {
      title: "Type",
      dataIndex: "matchType",
      key: "matchType",
    },
    {
      title: "Details",
      key: "details",
      render: (text, record) => (
        <a href={`/match-details/${record.matchId}`}>View Details</a>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Archives</Title>

      {/* Filters for Type and Year */}
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col span={8}>
          <Title level={4}>Select Type</Title>
          <Select
            defaultValue={type}
            onChange={(value) => setType(value)}
            style={{ width: "100%" }}
          >
            <Select.Option value="international">International</Select.Option>
            <Select.Option value="domestic">Domestic</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Title level={4}>Select Year</Title>
          <Select
            defaultValue={year}
            onChange={(value) => setYear(value)}
            style={{ width: "100%" }}
          >
            <Select.Option value="2024">2024</Select.Option>
            <Select.Option value="2023">2023</Select.Option>
            <Select.Option value="2022">2022</Select.Option>
          </Select>
        </Col>
      </Row>

      {/* Loading Spinner */}
      {loading ? (
        <Spin size="large" tip="Loading archives..." />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {/* Tab Panel for different match types */}
          <Tabs defaultActiveKey="1" style={{ marginBottom: "20px" }}>
            <TabPane tab="All Matches" key="1">
              <Table
                columns={columns}
                dataSource={archivesData}
                rowKey="matchId"
                pagination={{ pageSize: 10 }}
                loading={loading}
                bordered
              />
            </TabPane>
            <TabPane tab="International Matches" key="2">
              <Table
                columns={columns}
                dataSource={archivesData.filter((match) => match.type === "international")}
                rowKey="matchId"
                pagination={{ pageSize: 10 }}
                loading={loading}
                bordered
              />
            </TabPane>
            <TabPane tab="Domestic Matches" key="3">
              <Table
                columns={columns}
                dataSource={archivesData.filter((match) => match.type === "domestic")}
                rowKey="matchId"
                pagination={{ pageSize: 10 }}
                loading={loading}
                bordered
              />
            </TabPane>
          </Tabs>

          {/* Responsive Card Grid */}
          <Row gutter={16}>
            {archivesData.map((item) => (
              <Col span={8} key={item.matchId}>
                <Card
                  hoverable
                  title={item.matchName}
                  extra={<a href={`/match-details/${item.matchId}`}>Details</a>}
                >
                  <p>{item.matchDate}</p>
                  <p>{item.matchType}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Archives;
