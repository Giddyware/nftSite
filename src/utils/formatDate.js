export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);

  // Check if the date is yesterday
  if (date.toDateString() === yesterday.toDateString()) {
    return "yesterday";
  }

  // Get the day of the week
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

  // Format the date as "MM/DD/YY"
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;

  return dayOfWeek;
};
