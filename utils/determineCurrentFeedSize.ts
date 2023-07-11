import toFixed from "pages/api/generate/feed-schedule/helpers/toFixed";
import addOrSubtractDays from "./addOrSubtractDays";
import checkFeedDivisible from "./checkFeedDivisible";
import floorToNearestSpoonDivisible from "./floorToNearestSpoonDivisible";
import isDateBetween from "./isDateBetween";

const checkFeedInfo = (
   arr: Array<string>,
   oldData?: {
      morningFeed: number;
      eveningFeed: number;
      feedSize: string;
   },
   date?: string
): any => {
   let currentDate = date ? date : new Date().toDateString();

   const dummyEndDate = `${new Date(
      addOrSubtractDays(currentDate, "+", 1)
   ).toDateString()}`;

   let data = {
      morningFeed: oldData ? oldData.morningFeed : "0",
      eveningFeed: oldData ? oldData.eveningFeed : "0",
      feedSize: oldData ? oldData.feedSize : "none",
      endDate: dummyEndDate,
      changeMessage: "",
      newSchedule: [""],
   };

   // loop through the array and find the feed size and feed per day that matches the current date
   for (let i = 0; i < arr.length; i++) {
      // in arr[i], serach for start date and end date
      const startDateSearch = arr[i].search("START DATE");

      const endDateSearch = arr[i].search("END DATE");
      const feedPerDaySearch = arr[i].search("FEED PER DAY");
      const feedSizeSearch = arr[i].search("FEED SIZE");
      const startDate = arr[i].slice(
         startDateSearch + 11,
         startDateSearch + 27
      );

      const endDate = arr[i].slice(endDateSearch + 9, endDateSearch + 25);
      const feedPerDay = parseFloat(
         arr[i].slice(feedPerDaySearch + 14, feedPerDaySearch + 18)
      );
      const feedSize = arr[i]
         .slice(feedSizeSearch + 11, feedSizeSearch + 22)
         .includes("Special")
         ? arr[i].slice(feedSizeSearch + 11, feedSizeSearch + 22)
         : arr[i].slice(feedSizeSearch + 11, feedSizeSearch + 14);

      if (isDateBetween(currentDate, startDate, endDate)) {
         data.feedSize = feedSize;
         if (
            data.feedSize === "9mm" ||
            data.feedSize === "6mm" ||
            data.feedSize === "9mm Special" ||
            data.feedSize === "6mm Special"
         ) {
            data.morningFeed = "0";
            data.eveningFeed = checkFeedDivisible(feedPerDay);
         } else {
            const { morning, evening } =
               computeMorningAndEveningFeed(feedPerDay);
            console.log(morning, evening);
            data.morningFeed = morning;
            data.eveningFeed = evening;
         }

         // note index of the array, remove all the elements before the index and return the new array
         const newSchedule = arr.slice(i, arr.length);

         // SIMPLE FUNCTION TO CHECK IF VALUES CHANGES
         const thereIsChange = (
            val1: string | number | undefined,
            val2: string | number | undefined,
            param: string | undefined
         ) => {
            const check = val1 === val2;
            if (!check) {
               return `${param} changed from ${val1} to ${val2}`;
            } else {
               return;
            }
         };

         data.newSchedule = [...newSchedule, "OLD SHEDULE", ...arr];
         data.endDate = endDate;

         //@ts-ignore
         data.changeMessage = `${thereIsChange(
            oldData?.morningFeed,
            data.morningFeed,
            "Morning Feed"
         )}, ${thereIsChange(
            oldData?.eveningFeed,
            data.eveningFeed,
            "Evening Feed"
         )}, ${thereIsChange(oldData?.feedSize, data.feedSize, "Feed Size")}`;
         return data;
      }
   }

   return { ...data, noValidSchedule: true };
};

export default checkFeedInfo;

const computeMorningAndEveningFeed = (feedPerDay: number) => {
   const morning = floorToNearestSpoonDivisible(feedPerDay * 0.6);
   const newBal = toFixed(feedPerDay - morning, 2);
   const evening = floorToNearestSpoonDivisible(newBal);
   return {
      morning,
      evening,
   };
};
