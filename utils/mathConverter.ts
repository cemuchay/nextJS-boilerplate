const toNumber = (num: string) => {
   return twoDp(parseFloat(num));
};

const toInteger = (num: number) => {
   return parseInt(num.toString());
};

// make it round to decimal places
const twoDp = (num: number) => {
   return Math.round(num * 100) / 100;
};

const convertNaira = (amount: number) => {
   return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "NGN",
   });
};

const pluralCheck = (num: number) => {
   return num > 1 ? "s" : "";
};

const daysToWeeks = (days: number) => {
   if (days < 7) {
      return `${days} days`;
   }

   const weeks = Math.floor(days / 7);
   const remainder = days % 7;

   if (remainder === 0) {
      return `${weeks} week${pluralCheck(weeks)}`;
   } else {
      return `${Math.floor(days / 7)} week${pluralCheck(
         weeks
      )} and ${remainder} day${pluralCheck(remainder)}`;
   }
};

const formatDate = (date: string) => {
   const newDate = new Date(date);
   const day = newDate.getDate();
   const month = newDate.getMonth() + 1;
   const year = newDate.getFullYear();

   return `${day}/${month}/${year}`;
};

const roundToNearestMultiple = (num: number, multiple: number): number => {
   return Math.ceil(num / multiple) * multiple;
};

export {
   toNumber,
   twoDp,
   convertNaira,
   daysToWeeks,
   pluralCheck,
   formatDate,
   toInteger,
   roundToNearestMultiple,
};
