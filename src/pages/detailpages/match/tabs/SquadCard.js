import React from "react";
import { Card, Typography } from "antd";
import ImageComponent from "../../../../components/image/image";

const { Title } = Typography;

const SquadCard = ({ player }) => {
  return (
    <Card
      style={{
        width: 300,
        margin: "10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <ImageComponent imageId={player.faceImageId} width={"80px"} />
        <div style={{ marginLeft: "15px" }}>
          <Title level={5} style={{ margin: 0 }}>
            {player.fullName}
          </Title>
          <p>{player.role}</p>
        </div>
      </div>
    </Card>
  );
};

export default SquadCard;
