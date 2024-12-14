import { formatDistanceToNow, format } from "date-fns";

export const formatPubTime = (pubTime) => {
  const now = Date.now();
  const timestamp = Number(pubTime); 
  const timeDiff = now - timestamp;

  if (timeDiff > 7 * 24 * 60 * 60 * 1000) {
    return format(timestamp, "MMMM d, yyyy");
  }

  return formatDistanceToNow(timestamp, { addSuffix: true });
};
