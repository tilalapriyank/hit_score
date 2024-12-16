import React, { useState, useEffect } from "react";
import { Card, Avatar, Tag, Row, Col, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getTrendingPlayers } from "../../api/services/trendingplayer";

const TrendingPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrendingPlayers = async () => {
    setLoading(true);
    try {
      const response = await getTrendingPlayers();
      if (response && response.player) {
        setPlayers(response.player);
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingPlayers();
  }, []);

  const getAvatarUrl = (faceImageId) =>
    faceImageId ? `https://your-image-base-url.com/${faceImageId}.jpg` : null;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[24, 32]} justify="center">
          {players.map((player) => (
            <Col key={player.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Link
                to={`/player/${player.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    textAlign: "center",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    size={80}
                    src={getAvatarUrl(player.faceImageId)}
                    icon={<UserOutlined />}
                    style={{ marginBottom: 10 }}
                  />
                  <h3
                    style={{
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                    }}
                    title={player.name}
                  >
                    {player.name}
                  </h3>
                  <Tag color="blue" style={{ marginTop: 5 }}>
                    {player.teamName}
                  </Tag>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default TrendingPlayers;
