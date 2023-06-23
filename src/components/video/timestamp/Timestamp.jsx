import dateFormat from "dateformat";

export default function Timestamp({ timestamp }) {
  const formattedTimestamp = dateFormat(timestamp, "paddedShortDate");

  return (
    <p>{formattedTimestamp}</p>
  );
}