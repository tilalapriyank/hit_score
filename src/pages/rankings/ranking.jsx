import React, { useState, useEffect } from 'react';
import { Tabs, Select, Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import RankingFilters from '../../components/ranking/RankingFilters';
import RankingTable from '../../components/ranking/RankingsTable';
import { getRankingData } from '../../api/services/rankings';

const { TabPane } = Tabs;

const RankingsContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rankingsData, setRankingsData] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState('odi');
  const [selectedType, setSelectedType] = useState('batsmen');
  const [isWomen, setIsWomen] = useState(false);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setIsLoading(true);
        const data = await getRankingData(selectedType, selectedFormat, isWomen);
        // console.log(data);
        setRankingsData(data.rank);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRankings();
  }, [selectedType, selectedFormat, isWomen]);

  return (
    <div style={{ padding: '20px' }}>
      <Tabs defaultActiveKey="men">
        <TabPane tab="Men's Ranking" key="men">
          <RankingFilters
            isWomen={isWomen}
            setIsWomen={setIsWomen}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          {isLoading ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          ) : (
            <RankingTable data={rankingsData} selectedType={selectedType} />
          )}
        </TabPane>

        <TabPane tab="Women's Ranking" key="women">
          <RankingFilters
            isWomen={isWomen}
            setIsWomen={setIsWomen}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          {isLoading ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          ) : (
            <RankingTable data={rankingsData} selectedType={selectedType}/>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default RankingsContainer;
