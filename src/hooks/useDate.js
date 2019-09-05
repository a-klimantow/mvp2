export const useDate = dateValue => {
  const fixedDate = new Date(dateValue);
  const optionsDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric"
  };

  const date = fixedDate.toLocaleString("ru", optionsDate);
  const fullDate = fixedDate.toLocaleString("ru", {
    ...optionsDate,
    ...optionsTime
  });

  return { date, fullDate };
};