import React from "react";
import { Layout  } from "antd";
import RecentMatches from "./RecentMatches";
import LiveMatches from "./LiveMatches";
import NewsSection from "./NewsSection";
import UpcomingMatches from "./UpcomingMatches";

const { Content } = Layout;

const HomePage = ({ recentMatchData }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "20px" }}>
        <LiveMatches />
        <RecentMatches />
        <UpcomingMatches/>
        <NewsSection />
      </Content>
    </Layout>
  );
};

export default HomePage;
