import dateFormat from "dateformat";

export default function Timestamp({ timestamp }) {

  // Changes the timestamp to readable format
  const formattedTimestamp = dateFormat(timestamp, "paddedShortDate");

  return (
    <p>{formattedTimestamp}</p>
  );
}