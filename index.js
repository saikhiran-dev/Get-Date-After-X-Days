const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const nextDate = addDays(new Date(2020, 7, 22), days);
  return `${nextDate.getDate()}-${
    nextDate.getMonth() + 1
  }-${nextDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
