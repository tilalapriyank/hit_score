import React from "react";
import { Card, Typography } from "antd";

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

  const isEndOfOver = (overNumber) => {
    // Check if the overNumber ends in .6, indicating the last ball of the over
    return overNumber % 1 === 0.6 || overNumber % 1 === 0;
  };

  return (
    <div style={{ padding: "20px", background: "#f9f9f9" }}>
      {matchCommentary.map((item, index) => {
        const isEndOfOverFlag = isEndOfOver(item.overNumber);
        return (
          <div key={index}>
            <Card
              style={{
                marginBottom: "16px",
                padding: "12px", // Reduced padding
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
                {/* Ball Info (Over Number) */}
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
                {/* Commentary Text */}
                <div
                  style={{ flex: "1 1 auto", fontSize: "14px", color: "#555" }}
                >
                  {renderCommentaryText(item.commText, item.commentaryFormats)}
                </div>
              </div>
            </Card>

            {/* Render over separator and score details after every over (end of each over) */}
            {isEndOfOverFlag && item.event === "over-break" && (
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Text strong style={{ fontSize: "14px", color: "#333" }}>
                  Score: {item.overSeparator.score} /{" "}
                  {item.overSeparator.wickets}
                </Text>
                <div style={{ marginTop: "8px" }}>
                  <Text style={{ fontSize: "12px", color: "#555" }}>
                    {`Batsman: ${item.overSeparator.batStrikerNames[0]} - Runs: ${item.overSeparator.batStrikerRuns} (Balls: ${item.overSeparator.batStrikerBalls})`}
                  </Text>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <Text style={{ fontSize: "12px", color: "#555" }}>
                    {`Non-Striker: ${item.overSeparator.batNonStrikerNames[0]} - Runs: ${item.overSeparator.batNonStrikerRuns} (Balls: ${item.overSeparator.batNonStrikerBalls})`}
                  </Text>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <Text style={{ fontSize: "12px", color: "#555" }}>
                    {`Bowler: ${item.overSeparator.bowlNames[0]} - Overs: ${item.overSeparator.bowlOvers} (Runs: ${item.overSeparator.bowlRuns}, Wickets: ${item.overSeparator.bowlWickets})`}
                  </Text>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <Text style={{ fontSize: "12px", color: "#555" }}>
                    {`Summary: ${item.overSeparator.o_summary}`}
                  </Text>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentaryList;
