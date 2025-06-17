export const getDateSting = (dateUnix: number) => {
  //check if it is tomorrow
  const date = new Date(dateUnix);
  const today = new Date();
  const tomorrow = new Date(today);
  const yesterday = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(yesterday.getDate() - 1);
  if (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  ) {
    return (
      "Zítra od " +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    );
  }
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return (
      "Včera od " +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    );
  }

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return (
      "Dnes od " +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    );
  }

  return `${date.getDate()}. ${date.getMonth() + 1}. ${today.getFullYear() === date.getFullYear() ? "" : date.getFullYear() + " "}od ${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
};

export const dayTimeToString = (dayMills: number) => {
  const hours = Math.floor(dayMills / 3600000);
  const minutes = String(Math.round((dayMills % 3600000) / 60000)).padStart(
    2,
    "0",
  );
  return `${hours}:${minutes}`;
};

export const weekDays = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtke",
  "Pátek",
  "Sobota",
  "Neděle",
];
