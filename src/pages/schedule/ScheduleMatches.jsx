import React, { useState, useEffect } from "react";
import { getScheduleMatches } from "../../api/services/scheduleMatches";
import { Col, Tabs, Row, Typography, Spin } from "antd";
import { TABS } from "../../utils/config";
import ScheduleMatchCard from "../../components/schedulematches/ScheduleMatchCard";

const { TabPane } = Tabs;
const { Title } = Typography;

const ScheduleMatches = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMatches = async (tab) => {
    setLoading(true);
    try {
      const data = await getScheduleMatches(tab);
      setMatches(data.matchScheduleMap || []);
    } catch (error) {
      console.error("Error fetching matches:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches(activeTab);
  }, [activeTab]);

  return (
    <section>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        Schedule Matches
      </Title>
      <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
        {TABS.map((tab) => (
          <TabPane tab={tab.label} key={tab.key}>
            {loading ? (
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <Spin tip="Loading..." size="large" />
              </div>
            ) : (
              <Row gutter={[24, 24]}>
                {matches.map((match, key) => {
                  const scheduleAdWrapper = match.scheduleAdWrapper;
                  if (!scheduleAdWrapper) {
                    return null;
                  }
                  return (
                    <Col span={24} key={key} style={{ marginBottom: "30px" }}>
                      <Title
                        level={4}
                        style={{
                          background: "#f0f2f5",
                          padding: "10px 15px",
                          borderRadius: "8px",
                        }}
                      >
                        {scheduleAdWrapper.date}
                      </Title>

                      <Row gutter={[16, 16]}>
                        {scheduleAdWrapper.matchScheduleList.map(
                          (matchDetail, index) => (
                            <React.Fragment key={index}>
                              <Col xs={24} sm={12} lg={6}>
                                <Title level={5}>
                                  {matchDetail.seriesName}
                                </Title>
                              </Col>
                              <Col xs={24} sm={12} lg={18}>
                                <Row gutter={[16, 16]}>
                                  {/* Loop over the matches of the series */}
                                  {matchDetail.matchInfo.map((match) => (
                                    <Col
                                      xs={24}
                                      sm={12}
                                      md={8}
                                      lg={6}
                                      key={match.matchId}
                                    >
                                      <ScheduleMatchCard match={match} />
                                    </Col>
                                  ))}
                                </Row>
                              </Col>
                            </React.Fragment>
                          )
                        )}
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            )}
          </TabPane>
        ))}
      </Tabs>
    </section>
  );
};

export default ScheduleMatches;
