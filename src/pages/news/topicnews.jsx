import React, { useState, useEffect } from "react";
import { Row, Typography, Spin, Col } from "antd";
import NewsCard from "../../components/news/newsCard";
import { getNewsByTopic } from "../../api/services/topicnews";
import { useLocation, useParams } from "react-router-dom";

const { Title } = Typography;

const TopicNewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { topic } = location.state || {};
  const { id } = useParams();

  const fetchNews = async (id) => {
    setLoading(true);
    try {
      const data = await getNewsByTopic(id);
      setNewsItems(data.storyList || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchNews(id); 
    }
  }, [id]);

  return (
    <div className="news-container" style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        {topic}
      </Title>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Spin tip="Loading News..." size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          {newsItems
            .filter((news) => news.story)
            .map((news) => (
              <Col key={news.story.id} xs={24} sm={12} md={8} lg={8}>
                <NewsCard news={news} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default TopicNewsPage;
