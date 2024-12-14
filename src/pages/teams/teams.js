import React, { useState, useEffect } from "react";
import { getTeamList } from "../../api/services/teamList";
import { Tabs, Row, Typography, Spin } from "antd";
import TeamList from "../../components/teams/TeamList";
import { TABS } from "../../utils/config";

const { TabPane } = Tabs;
const { Title } = Typography;

const Teams = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTeams = async (tab) => {
    setLoading(true);
    try {
      const data = await getTeamList(tab);
      setTeams(data.list || []);
    } catch (error) {
      console.error("Error fetching teams:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams(activeTab);
  }, [activeTab]);

  return (
    <div className="teams-container" style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Teams
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
                <TeamList teams={teams} />
              </Row>
            )}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Teams;
