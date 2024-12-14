import React, { useState, useEffect } from "react";
import { Row, Typography, Spin, Col } from "antd";
import NewsCard from "../../components/news/newsCard";
import { getTopNews } from "../../api/services/topnews";

const { Title } = Typography;

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopNews();
      if (data?.storyList) {
        setNewsItems(data.storyList);
      } else {
        setNewsItems([]);
      }
    } catch (error) {
      setError("Failed to load news. Please try again later.");
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-container" style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        News
      </Title>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Spin tip="Loading News..." size="large" />
        </div>
      ) : error ? (
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          {error}
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

export default NewsSection;
