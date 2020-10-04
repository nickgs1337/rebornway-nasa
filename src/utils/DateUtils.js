import {getLocale} from "./BrowserUtils";
import {capitalizeFirstLetter} from "./StringUtils";

const getLastMonthNames =(amount) => {
  let date = new Date();
  let months = [];
  while(amount > 0) {
    months.push(capitalizeFirstLetter(date.toLocaleString(getLocale(), {month: 'long'})));
    date.setMonth(date.getMonth() -1);
    amount --;
  }
  return months;
};

export {getLastMonthNames};