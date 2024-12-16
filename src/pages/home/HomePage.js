import React from "react";
import { Layout, Typography } from "antd";
import RecentMatches from "./RecentMatches";
import LiveMatches from "./LiveMatches";
import NewsSection from "./NewsSection";

const { Content, Header } = Layout;
const { Title } = Typography;

const HomePage = ({ recentMatchData }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "20px" }}>
        <LiveMatches />
        <RecentMatches />
        <NewsSection />
      </Content>
    </Layout>
  );
};

export default HomePage;
