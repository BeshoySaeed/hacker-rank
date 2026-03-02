function getDayName(dateString) {
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const parts = dateString.split("/");

  const month = parseInt(parts[0], 10) - 1;
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Create date and validate
  const date = new Date(year, month, day);

  const dayIndex = date.getDay();
  return dayArr[dayIndex];
}

// Example usage
console.log(getDayName("09/11/1990")); // Output: Friday
