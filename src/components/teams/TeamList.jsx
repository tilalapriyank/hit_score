import React from "react";
import { Col, Row, Card } from "antd";
import { Link } from "react-router-dom";
import Image from "../image/image";

const TeamList = ({ teams }) => {
  return teams.map(
    (team) =>
      team.teamId ? ( 
        <Col xs={24} sm={12} md={8} lg={6} key={team.teamId}>
          <Card hoverable className="team-card">
            <Row gutter={16} align="middle">
              <Col xs={6} sm={6} md={6}>
                <Image imageId={team.imageId} width={"100%"} />
              </Col>
              <Col xs={18} sm={18} md={18}>
                <Card.Meta
                  title={
                    <Link to={`/team/${team.teamId}`} className="team-link">
                      {team.teamName}
                    </Link>
                  }
                />
              </Col>
            </Row>
          </Card>
        </Col>
      ) : null 
  );
};

export default TeamList;
