import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import ImageComponent from "../image/image";
import { formatPubTime } from "../../utils/formatTime";

const { Text } = Typography;
const NewsCard = ({ news }) => {
  const { hline, intro, imageId, context, pubTime,id } = news.story;

  return (
    <Link to={`/news/${id}`}>
      <Card hoverable style={{ width: "100%", marginBottom: "20px" }}>
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <ImageComponent
                imageId={imageId}
                width={"100%"}
              />
            </div>
          </Col>
          <Col xs={24} sm={16}>
            <Text style={{ display: "block", marginBottom: "10px", fontSize: "14px", color: "#333" }}>{context}</Text>
            <Text strong style={{ display: "block", marginBottom: "10px", fontSize: "16px", color: "#000" }}>{hline}</Text>
            <Text style={{ display: "block", marginBottom: "10px", fontSize: "14px", color: "#555" }}>{intro}</Text>
            <Text style={{ display: "block", fontSize: "12px", color: "#777" }}>{formatPubTime(pubTime)}</Text>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};

export default NewsCard;
