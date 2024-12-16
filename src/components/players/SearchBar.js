import React, { useState } from "react";
import { Input, Dropdown, List, Spin, Empty } from "antd";
import { Link } from "react-router-dom";
import { getSearchPlayers } from "../../api/services/searchplayer";

const { Search } = Input;

const SearchBar = ({ onPlayerSelect }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = async (value) => {
    if (!value || value.trim().length < 3) {
      setSearchResults([]);
      setDropdownVisible(false);
      return;
    }

    setLoading(true);
    try {
      const data = await getSearchPlayers(value.trim());
      setSearchResults(data?.player || []);
      setDropdownVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayerSelect = (player) => {
    setDropdownVisible(false);
    onPlayerSelect(player);
  };

  const renderDropdownContent = () => {
    if (loading) {
      return <Spin style={{ margin: "20px auto", display: "block" }} />;
    }
    if (!searchResults.length) {
      return <Empty description="No players found" />;
    }
    return (
      <List
        dataSource={searchResults}
        renderItem={(player) => (
          <List.Item
            onClick={() => handlePlayerSelect(player)}
            style={{ cursor: "pointer", padding: "10px 20px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Link
                to={`/player/${player.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {player.name}
              </Link>
              <span style={{ color: "#888" }}>{player.teamName}</span>
            </div>
          </List.Item>
        )}
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          padding: 0,
        }}
      />
    );
  };

  return (
    <div style={{ marginBottom: 20, textAlign: "center" }}>
      <Dropdown
        overlay={renderDropdownContent()}
        visible={dropdownVisible}
        trigger={[]}
        placement="bottomCenter"
        overlayStyle={{
          backgroundColor: "white",
          zIndex: 9999,
          width: "fit-content",
          maxWidth: "100%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
        }}
      >
        <Search
          placeholder="Search players by name..."
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => handleSearch(e.target.value)}
          style={{ maxWidth: 400 }}
        />
      </Dropdown>
    </div>
  );
};

export default SearchBar;