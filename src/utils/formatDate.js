export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = currentDate.getTime() - date.getTime();

  // Calculate the number of days
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    // If it's the same day, return the time
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } else if (daysDiff === 1) {
    // If it's yesterday, return "Yesterday"
    return "Yesterday";
  } else if (daysDiff <= 7) {
    // If it's within a week, return the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  } else {
    // If it's more than a week, return the formatted date
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date
      .getFullYear()
      .toString()
      .slice(-2)}`;
    return formattedDate;
  }
};
