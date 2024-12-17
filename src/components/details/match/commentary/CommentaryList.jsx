import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

const CommentaryList = ({ matchCommentary }) => {
  if (!matchCommentary || matchCommentary.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <Text type="secondary">No commentary available for this match.</Text>
      </div>
    );
  }

  const renderBoldText = (text) => {
    return (
      <Text strong style={{ fontSize: "16px" }}>
        {text}
      </Text>
    );
  };

  const renderCommentaryText = (commText, commentaryFormats) => {
    let formattedTextArray = [commText];

    if (
      commentaryFormats?.bold?.formatId &&
      commentaryFormats.bold.formatValue
    ) {
      commentaryFormats.bold.formatId.forEach((formatId, index) => {
        const boldText = renderBoldText(
          commentaryFormats.bold.formatValue[index]
        );

        formattedTextArray = formattedTextArray.flatMap((part) => {
          if (typeof part === "string" && part.includes(formatId)) {
            const splitParts = part.split(formatId);
            return splitParts.flatMap((splitPart, i) => {
              return i === splitParts.length - 1
                ? [splitPart]
                : [splitPart, boldText];
            });
          } else {
            return part;
          }
        });
      });
    }

    return (
      <>
        {formattedTextArray.flatMap((text, idx) => {
          if (typeof text === "string") {
            return text.split("\\n").map((line, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ));
          }
          return text;
        })}
      </>
    );
  };

  return (
    <div style={{ padding: "20px", background: "#f9f9f9" }}>
      {matchCommentary.map((item, index) => {
        return (
          <div key={index}>
            {item.event === "over-break" && (
              <Card
                style={{
                  marginBottom: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  backgroundColor: "#c6c6c6",
                  color: "#000",
                }}
              >
                <Row
                  gutter={[8, 8]}
                  style={{ fontSize: "12px", color: "#555" }}
                >
                  {/* Column 1: Over Number */}
                  <Col
                    span={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#333",
                    }}
                  >
                    {Math.round(item.overNumber)}
                  </Col>

                  {/* Column 2: Runs Scored */}
                  <Col
                    span={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Text strong>Runs Scored: {item.overSeparator.runs}</Text>
                    <Text>{item.overSeparator.o_summary}</Text>
                  </Col>

                  {/* Column 3: Score After Over */}
                  <Col
                    span={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#333",
                    }}
                  >
                    <Text>{`Score after ${Math.round(
                      item.overNumber
                    )} overs`}</Text>
                    <Text>
                      {item.overSeparator.batTeamName}{" "}
                      {item.overSeparator.score}-{item.overSeparator.wickets}
                    </Text>
                  </Col>

                  {/* Column 4: Batsmen Details */}
                  <Col
                    span={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Text strong>
                      {item.overSeparator.batStrikerNames[0]}{" "}
                      {item.overSeparator.batStrikerRuns}(
                      {item.overSeparator.batStrikerBalls})
                    </Text>
                    <Text>
                      {item.overSeparator.batNonStrikerNames[0]}{" "}
                      {item.overSeparator.batNonStrikerRuns}(
                      {item.overSeparator.batNonStrikerBalls})
                    </Text>
                  </Col>

                  {/* Column 5: Bowler Details */}
                  <Col
                    span={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Text strong>{item.overSeparator.bowlNames[0]}</Text>
                    <Text>
                      {item.overSeparator.bowlOvers}-
                      {item.overSeparator.bowlMaidens}-
                      {item.overSeparator.bowlRuns}-
                      {item.overSeparator.bowlWickets}
                    </Text>
                  </Col>
                </Row>
              </Card>
            )}

            <Card
              style={{
                marginBottom: "16px",
                padding: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                {item.ballNbr !== 0 && (
                  <div
                    style={{
                      flex: "0 1 auto",
                      marginBottom: "4px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Text strong style={{ fontSize: "16px", color: "#333" }}>
                      {item.overNumber}
                    </Text>
                  </div>
                )}
                <div
                  style={{ flex: "1 1 auto", fontSize: "14px", color: "#555" }}
                >
                  {renderCommentaryText(item.commText, item.commentaryFormats)}
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CommentaryList;
