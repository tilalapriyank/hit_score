import React, { useState, useEffect } from "react";
import { Row, Typography, Spin, Col } from "antd";
import { getNewsByCategory } from "../../api/services/news";
import NewsTabs from "../../components/news/tabs";
import NewsCard from "../../components/news/newsCard";
import { getTopNews } from "../../api/services/topnews";
import NewsTopic from "../../components/news/newstopics"; // import your topic component

const { Title } = Typography;

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (tabId) => {
    setLoading(true);
    try {
      let data;
      if (tabId === "all") {
        data = await getTopNews();
        setNewsItems(data.storyList || []);
      } else {
        const newsData = await getNewsByCategory(tabId);
        setNewsItems(newsData.storyList || []);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(activeTab);
  }, [activeTab]);

  return (
    <div className="news-container" style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        News
      </Title>

      <NewsTabs onTabChange={setActiveTab} />

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Spin tip="Loading News..." size="large" />
        </div>
      ) : activeTab === "topics" ? (
        <NewsTopic />
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

export default NewsPage;
