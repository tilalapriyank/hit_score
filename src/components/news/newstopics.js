import React, { useState, useEffect } from "react";
import { Spin, Card, Row, Col, Typography } from "antd";
import { getNewsTopics } from "../../api/services/newstopics";
import { Link } from "react-router-dom";

const { Title } = Typography;

const TopicComponent = () => {
  const [newstopics, setNewsTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTopics = async () => {
    setLoading(true);
    try {
      const data = await getNewsTopics();
      setNewsTopics(data.topics || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Title level={2}>Topics</Title>

      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {newstopics.map((item) => (
            <Col span={6} key={item.id}>
              <Link to={`/news/info/${item.id}`} state={{ topic: item.headline }}>
                <Card title={item.headline} style={{ width: "100%" }}>
                  {item.description}
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default TopicComponent;
