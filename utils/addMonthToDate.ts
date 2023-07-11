import determineTimeAndDate from "./determineTimeAndDate";

const addMonthToDate = (date: string, num: number): string => {
   const newDate = new Date(date);
   newDate.setMonth(new Date(date).getMonth() + num);
   return determineTimeAndDate(newDate).date;
};

export default addMonthToDate;
