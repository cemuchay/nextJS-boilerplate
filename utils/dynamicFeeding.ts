import toFixed from "pages/api/generate/feed-schedule/helpers/toFixed";
import checkFeedDivisible from "./checkFeedDivisible";

const dynamicFeeding = (
   feedPerDay: number,
   waterDischarge: Boolean,
   returnNumber?: "num"
) => {
   const freshDay = 5.2,
      nextDay = 4,
      total = 9.2;

   let feed = 0;
   feedPerDay = feedPerDay * 2;

   if (feedPerDay > 0) {
      feed = checkFeedDivisible(toFixed((freshDay / total) * feedPerDay, 1));
   }

   if (!waterDischarge) {
      feed = toFixed(feedPerDay - feed, 1);
   }

   if (returnNumber === "num") {
      return feed;
   }

   if (feed > 2.6) {
      let feed1 = feed - 2.6;
      let feed2 = 0;
      if (feed1 > 2.6) {
         feed2 = feed1 - 2.6;
         return `${2.6} kg + ${2.6} kg + ${toFixed(feed2, 2)} kg`;
      }
      return `${2.6} kg + ${toFixed(feed1, 2)} kg`;
   } else if (feed > 0) {
      return `${toFixed(feed, 2)} kg`;
   }

   if (feedPerDay === 0) {
      return;
   }
};

export default dynamicFeeding;
