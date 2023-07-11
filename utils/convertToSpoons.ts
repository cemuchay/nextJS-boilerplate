import toFixed from "pages/api/generate/feed-schedule/helpers/toFixed";
import { pluralCheck } from "./mathConverter";
import { feedSpoonConstant } from "public/gfarms/gfarms-variables";

const convSpoons = (feedAmount: number) => {
   const num = toFixed(feedAmount, 2);
 
   const modular = toFixed((num * 10) % 2, 1);

   if (modular !== 0) {
      if ((modular * 10) % feedSpoonConstant === 0) {
         const value = (modular/feedSpoonConstant) * 10;
         return `${toFixed(value, 1)} spoon${pluralCheck(value)}`;
      } else {
         const value = toFixed(num - 0.1, 1);
         const val = (value / feedSpoonConstant) * 10;
         return `${val} spoon${pluralCheck(val)}}`;
      }
   } else return `${num} kg`;
};


const convertToSpoons = (feedAmount: number) => {

   if (feedAmount > 0.2 && ((feedAmount * 10) % 2 ) !== 0 ) {
      const lhs = Math.floor(feedAmount / 0.2) * 0.2;
      const rhs = toFixed(feedAmount - lhs, 2);
      return `${toFixed(lhs, 1)} kg + ${convSpoons(rhs)}`
   }
   else {
      return convSpoons(feedAmount);
   }
   
 };

 export default convertToSpoons;