import { BASE_URL } from "./apiConfig";

export const ENDPOINTS = {
  image: (imageId) => `${BASE_URL}img/v1/i1/c${imageId}/i.jpg`, //use
  recentMatches: `${BASE_URL}matches/v1/recent`, //use
  liveMatches: `${BASE_URL}matches/v1/live`, 
  upcomingMatches: `${BASE_URL}matches/v1/upcoming`, 
  matchCenter: (matchId) => `${BASE_URL}mcenter/v1/${matchId}`,
  teamDetails: (matchId, teamId) =>
    `${BASE_URL}mcenter/v1/${matchId}/team/${teamId}`,
  matchOvers: (matchId) => `${BASE_URL}mcenter/v1/${matchId}/overs`,
  matchScorecard: (matchId) => `${BASE_URL}mcenter/v1/${matchId}/hscard`,

  schedule: (type) => `${BASE_URL}schedule/v1/${type}`,

  series: {
    international: `${BASE_URL}series/v1/international`,
    domestic: `${BASE_URL}series/v1/domestic`,
    women: `${BASE_URL}series/v1/women`,
    league: `${BASE_URL}series/v1/league`,
    archives: {
      international: `${BASE_URL}series/v1/archives/international`,
      domestic: `${BASE_URL}series/v1/archives/domestic`,
      women: `${BASE_URL}series/v1/archives/women`,
      league: `${BASE_URL}series/v1/archives/league`,
    },
    details: (seriesId) => `${BASE_URL}series/v1/${seriesId}`,
    news: (seriesId) => `${BASE_URL}news/v1/series/${seriesId}`,
    squads: (seriesId) => `${BASE_URL}series/v1/${seriesId}/squads`,
    squadDetails: (seriesId, teamId) =>
      `${BASE_URL}series/v1/${seriesId}/squads/${teamId}`,
    venues: (seriesId) => `${BASE_URL}series/v1/${seriesId}/venues`,
    pointsTable: (seriesId) =>
      `${BASE_URL}stats/v1/series/${seriesId}/points-table`,
    stats: (seriesId) => `${BASE_URL}stats/v1/series/${seriesId}`,
    mostRuns: (seriesId) =>
      `${BASE_URL}stats/v1/series/${seriesId}?statsType=mostRuns`,
  },

  teamlist: (type) => `${BASE_URL}teams/v1/${type}`, //use

  teams: {
    schedule: (teamId) => `${BASE_URL}teams/v1/${teamId}/schedule`,
    results: (teamId) => `${BASE_URL}teams/v1/${teamId}/results`,
    news: (teamId) => `${BASE_URL}news/v1/team/${teamId}`,
    players: (teamId) => `${BASE_URL}teams/v1/${teamId}/players`,
    stats: (teamId) => `${BASE_URL}stats/v1/team/${teamId}`,
    mostRuns: (teamId) =>
      `${BASE_URL}stats/v1/team/${teamId}?statsType=mostRuns`,
  },

  venues: {
    details: (venueId) => `${BASE_URL}venues/v1/${venueId}`,
    stats: (venueId) => `${BASE_URL}stats/v1/venue/${venueId}`,
    matches: (venueId) => `${BASE_URL}venues/v1/${venueId}/matches`,
  },

  playerStats: {
    trending: `${BASE_URL}stats/v1/player/trending`,
    career: (playerId) => `${BASE_URL}stats/v1/player/${playerId}/career`,
    news: (playerId) => `${BASE_URL}news/v1/player/${playerId}`,
    bowling: (playerId) => `${BASE_URL}stats/v1/player/${playerId}/bowling`,
    batting: (playerId) => `${BASE_URL}stats/v1/player/${playerId}/batting`,
    search: (playerName) =>
      `${BASE_URL}stats/v1/player/search?plrN=${playerName}`,
  },

  news: {
    index: `${BASE_URL}news/v1/index`, //use
    detail: (newsId) => `${BASE_URL}news/v1/detail/${newsId}`,
    categories: `${BASE_URL}news/v1/cat`, //use
    categoryDetails: (categoryId) => `${BASE_URL}news/v1/cat/${categoryId}`, //use
    topics: `${BASE_URL}news/v1/topics`, //use
    topicDetails: (topicId) => `${BASE_URL}news/v1/topics/${topicId}`, //use
  },

  photos: {
    index: `${BASE_URL}photos/v1/index`,
    detail: (photoId) => `${BASE_URL}photos/v1/detail/${photoId}`,
    image: (imagePath) => `${BASE_URL}img/v1/${imagePath}`,
  },

  rankings: (playerType, format) =>
    `${BASE_URL}stats/v1/rankings/${playerType}?formatType=${format}`,

  iccStandings: {
    teamMatchType1: `${BASE_URL}stats/v1/iccstanding/team/matchtype/1`,
  },

  topStats: {
    general: `${BASE_URL}stats/v1/topstats`,
    mostRuns: `${BASE_URL}stats/v1/topstats/0?statsType=mostRuns`,
  },
};
