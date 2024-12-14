import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/header";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import RecentMatches from "./pages/recent/RecentMatches";
import Teams from "./pages/teams/teams";
import ScheduleMactches from "./pages/schedule/ScheduleMatches";

function App() {
  return (
    <Router>
      <HeaderComponent /> {/* Add Header Component */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<ScheduleMactches/>} />
          <Route path="/recent" element={<RecentMatches />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<h1>News Page</h1>} />
          <Route path="/players" element={<h1>Players Page</h1>} />
          <Route path="/ranking" element={<h1>Ranking Page</h1>} />
          <Route path="/archives" element={<h1>Archives Page</h1>} />
          <Route path="/contact-us" element={<h1>Contact Us Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
