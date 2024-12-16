import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/header";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import RecentMatches from "./pages/recent/RecentMatches";
import Teams from "./pages/teams/teams";
import ScheduleMactches from "./pages/schedule/ScheduleMatches";
import NewsPage from "./pages/news/news";
import TopicNewsPage from "./pages/news/topicnews";
import TrendingPage from "./pages/players/players";
import RankingsPage from "./pages/rankings/ranking";
import Archives from "./pages/archives/archives";
import LiveMatches from "./pages/live/livematches"
import UpcomingMatches from "./pages/upcoming/upcoming";

function App() {
  return (
    <Router>
      <HeaderComponent /> {/* Add Header Component */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<ScheduleMactches />} />
          <Route path="/recent" element={<RecentMatches />} />
          <Route path="/live" element={<LiveMatches />} />
          <Route path="/upcoming" element={<UpcomingMatches />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/players" element={<TrendingPage />} />
          <Route path="/ranking" element={<RankingsPage />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/news/info/:id" element={<TopicNewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
