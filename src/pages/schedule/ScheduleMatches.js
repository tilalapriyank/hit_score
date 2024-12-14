import React, { useState, useEffect } from "react";
import { getScheduleMatches } from "../../api/services/scheduleMatches";
import { Tabs, Row, Typography, Spin } from "antd";
import { TABS } from "../../utils/config";
import ScheduleMatchCard from "./ScheduleMatchCard"; // Import the ScheduleMatchCard component

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
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
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
              <Row gutter={[16, 16]}>
                {matches &&
                  matches.map((matchGroup, groupIndex) => {
                    return (
                      matchGroup.matchScheduleList && (
                        <div key={groupIndex}>
                          <Title level={4} style={{ textAlign: "center" }}>
                            {matchGroup.date}
                          </Title>
                          <Row gutter={[16, 16]}>
                            {matchGroup.matchScheduleList.map((match, index) => (
                              <ScheduleMatchCard key={match.matchId || index} match={match} />
                            ))}
                          </Row>
                        </div>
                      )
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
