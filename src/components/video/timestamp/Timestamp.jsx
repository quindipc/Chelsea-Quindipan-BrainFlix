import dateFormat from "dateformat";

export default function Timestamp({ timestamp }) {
  const formattedTimestamp = dateFormat(timestamp, "paddedShortDate");

  return (
    <p className="videoinfo__info">{formattedTimestamp}</p>
  );
}