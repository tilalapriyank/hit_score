import React, { useState } from "react";
import { Layout, Menu, Typography, Row, Col, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Header style={{ background: "#001529", padding: "0 16px" }}>
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        {/* Logo Section */}
        <Col>
          <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
            <Link to="/" style={{ color: "white" }}>
              HitScore
            </Link>
          </Typography.Title>
        </Col>

        {/* Mobile Menu Button */}
        <Col
          xs={24}
          sm={24}
          md={0}
          style={{ textAlign: "right", maxWidth: "15%" }}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            style={{
              color: "white",
              fontSize: "24px",
              padding: 0,
            }}
            onClick={toggleDrawer}
          />
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} sm={0} md={12}>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ justifyContent: "flex-end", display: "flex" }}
            defaultSelectedKeys={["1"]}
            items={[
              { label: <Link to="/">Home</Link>, key: "1" },
              { label: <Link to="/matches">Matches</Link>, key: "2" },
              { label: <Link to="/teams">Teams</Link>, key: "3" },
              { label: <Link to="/news">News</Link>, key: "4" },
              { label: <Link to="/players">Players</Link>, key: "5" },
              { label: <Link to="/ranking">Ranking</Link>, key: "6" },
              { label: <Link to="/archives">Archives</Link>, key: "7" },
            ]}
          />
        </Col>
      </Row>

      {/* Drawer for Mobile Menu */}
      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={drawerVisible}
        width="75%"
        bodyStyle={{
          padding: 0,
          backgroundColor: "#001529",
        }}
        headerStyle={{ display: "none" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Button
            type="text"
            icon={
              <CloseOutlined style={{ color: "white", fontSize: "24px" }} />
            }
            onClick={toggleDrawer}
          />
        </div>
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{
            borderRight: 0,
            backgroundColor: "#001529",
          }}
          onClick={toggleDrawer} // Close the drawer when an item is clicked
          items={[
            { label: <Link to="/">Home</Link>, key: "1" },
            { label: <Link to="/matches">Matches</Link>, key: "2" },
            { label: <Link to="/teams">Teams</Link>, key: "3" },
            { label: <Link to="/news">News</Link>, key: "4" },
            { label: <Link to="/players">Players</Link>, key: "5" },
            { label: <Link to="/ranking">Ranking</Link>, key: "6" },
            { label: <Link to="/archives">Archives</Link>, key: "7" },
          ]}
        />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
