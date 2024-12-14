import React, { useState, useEffect } from "react";
import { Spin, Alert, Row, Col, Typography, Tabs } from "antd";
import { getRecentMatches } from "../../api/services/recentMatches";
import MatchCard from "../../components/recentmatches/MatchCard";

const { Title } = Typography;
const { TabPane } = Tabs;

const RecentMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const data = await getRecentMatches();
        setMatches(data.typeMatches || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load recent matches.");
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
      </div>
    );

  if (error)
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ margin: "20px" }}
      />
    );

  return (
    <section>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Recent Matches
      </Title>
      <Tabs defaultActiveKey="0" centered>
        {matches.map((typeMatch, tabIndex) => (
          <TabPane tab={typeMatch.matchType} key={tabIndex}>
            <Row gutter={[16, 16]}>
              {typeMatch.seriesMatches.map((series, seriesIndex) => {
                const seriesAdWrapper = series.seriesAdWrapper;
                if (!seriesAdWrapper) {
                  return null;
                }
                return (
                  <Col
                    span={24}
                    key={seriesIndex}
                    style={{ marginBottom: "20px" }}
                  >
                    <Title
                      level={4}
                      style={{
                        background: "#f0f2f5",
                        padding: "8px 12px",
                        borderRadius: "8px",
                      }}
                    >
                      {seriesAdWrapper.seriesName}
                    </Title>
                    <Row gutter={[16, 16]}>
                      {seriesAdWrapper.matches.map((matchDetail) => (
                        <Col
                          xs={24}
                          sm={12}
                          lg={6}
                          key={matchDetail.matchInfo.matchId}
                        >
                          <MatchCard match={matchDetail} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentMatches;
