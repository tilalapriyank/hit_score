import React from "react";
import { Table, Card ,Typography} from "antd";

const {Text}=Typography;

const BroadcastDetails = ({ matchInfo }) => {
  if (!matchInfo.broadcastInfo) return <Text>No broadcast information available</Text>;

  const broadcastColumns = [
    { title: "TV Channels", dataIndex: "tvChannels", key: "tvChannels" },
    { title: "Live Streaming", dataIndex: "liveStreaming", key: "liveStreaming" },
  ];

  const broadcastData = [
    {
      key: "1",
      tvChannels: matchInfo.broadcastInfo[0]?.broadcaster[1]?.value || "N/A",
      liveStreaming: matchInfo.broadcastInfo[0]?.broadcaster[0]?.value || "N/A",
    },
  ];

  return (
    <Card title="Broadcast Information" style={{ marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Table columns={broadcastColumns} dataSource={broadcastData} pagination={false} bordered responsive />
    </Card>
  );
};

export default BroadcastDetails;
