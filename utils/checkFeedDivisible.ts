import toFixed from "pages/api/generate/feed-schedule/helpers/toFixed";

const checkFeedDivisible = (number: number) => {

    const num = toFixed(number, 2);

    const modular = toFixed((num * 10) % 2, 1);

    if (modular !== 0) {
       if ((modular * 10) % 4 === 0) {
          return num;
       } else {
          return toFixed(num - 0.1, 1);
       }
    } else return num;
 };


 export default checkFeedDivisible;