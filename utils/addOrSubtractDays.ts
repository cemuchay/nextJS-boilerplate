import returnISODate from "./returnISODate";

function addOrSubtractDays(
   dateStr: string,
   sign: "+" | "-",
   num: number,
   ISO?: boolean,
   stringDate?: boolean
): string {
   const date = new Date(dateStr);
   const newDate = new Date(date);
   if (sign === "+") {
      newDate.setDate(date.getDate() + num);
   } else {
      newDate.setDate(date.getDate() - num);
   }

   const dateString = newDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });

   if (ISO) {
      return returnISODate(dateString);
   } else if (stringDate) {
      return new Date(dateString).toDateString();
   } else {
      return dateString;
   }
}

export default addOrSubtractDays;
