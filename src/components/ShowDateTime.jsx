
const ShowDateTime = ({timestamp}) => {
    const date = new Date(timestamp);
  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div>
         <p className="text-[8px] sm:text-xs">{currentDate}</p>
         <p className="text-[8px] sm:text-xs">{currentTime}</p>
    </div>
  )
}

export default ShowDateTime;