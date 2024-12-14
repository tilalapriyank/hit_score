import React, { useState, useEffect } from "react";
import { getNewsTabs } from "../../api/services/newstabs";
import { Tabs, Spin, Alert } from "antd";

const { TabPane } = Tabs;

const NewsTabs = ({ onTabChange }) => {
  const [storyTypes, setStoryTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsTabs = async () => {
      try {
        const data = await getNewsTabs();
        if (data && data.storyType) {
          setStoryTypes(data.storyType);
          if (data.storyType.length > 0) {
            onTabChange("all");
          }
        } else {
          setError("Failed to load story types.");
        }
      } catch (err) {
        setError("An error occurred while fetching story types.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsTabs();
  }, [onTabChange]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ marginTop: "20px" }}
      />
    );
  }

  return (
    <Tabs
      defaultActiveKey="all"
      onChange={(key) => onTabChange(key)}
      type="line"
    >
      <TabPane tab="All Stories" key="all" />
      {storyTypes.map((story) => (
        <TabPane tab={story.name} key={story.id} />
      ))}
    </Tabs>
  );
};

export default NewsTabs;
