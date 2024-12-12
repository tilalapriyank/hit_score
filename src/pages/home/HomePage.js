import React from 'react';
import LiveMatches from './LiveMatches';
import ScheduledMatches from './ScheduledMatches';
import RecentMatches from './RecentMatches';
import NewsSection from './NewsSection';

const HomePage = ({ liveMatchesData, scheduledMatchesData, recentMatchData, newsData }) => {
  return (
    <div>
      {/* Live Matches Section */}
      {/* <LiveMatches liveMatches={liveMatchesData} /> */}

      {/* Scheduled Matches Section */}
      {/* <ScheduledMatches scheduledMatches={scheduledMatchesData} /> */}

      {/* Recent Matches Section */}
      <RecentMatches recentMatches={recentMatchData} />

      {/* News Section */}
      {/* <NewsSection news={newsData} /> */}
    </div>
  );
};

export default HomePage;
