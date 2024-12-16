import React, { lazy, Suspense } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router-dom";
import { MatchTabs } from "../../../utils/config";
import Details from "./detail";

const { TabPane } = Tabs;

const Info = lazy(() => import("./tabs/Info"));
const Live = lazy(() => import("./tabs/Live"));
const Scorecard = lazy(() => import("./tabs/Scorecard"));
const Squads = lazy(() => import("./tabs/Squads"));
const Overs = lazy(() => import("./tabs/Overs"));

const TabComponents = {
  info: Info,
  live: Live,
  scorecard: Scorecard,
  squads: Squads,
  overs: Overs,
};

const Match = () => {
  const { id } = useParams();

  return (
    <>
      <Details matchId={id} />
      <Tabs defaultActiveKey="info">
        {MatchTabs.map((tab) => {
          const Component = TabComponents[tab.key];
          return (
            <TabPane tab={tab.label} key={tab.key}>
              <Suspense fallback={<div>Loading {tab.label}...</div>}>
                <Component matchId={id} />
              </Suspense>
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default Match;
