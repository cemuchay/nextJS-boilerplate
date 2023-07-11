import addDashToDateString from "./addDashToDateString";

const moment = require("moment-timezone");

const determineTimeAndDate = (
   date?: string | Date,
   usDate?: boolean,
   dateString?: boolean,
   dashDate?: boolean
) => {
   const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
   };

   let currentDate = date
      ? new Date(date).toLocaleDateString("en-GB", options)
      : new Date().toLocaleDateString("en-GB", options);

   const currentTime = new Date().toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
   });

   if (usDate) {
      options.weekday = "long";
      currentDate = new Date(currentDate).toLocaleDateString("en-US", options);
   }

   if (dateString) {
      return {
         date: new Date(currentDate).toDateString(),
         time: currentTime,
      };
   }

   if (dashDate) {
      return {
         date: addDashToDateString(currentDate),
         time: currentTime,
      }
   }



   const formattedTime = moment().tz("Africa/Lagos").format("HH:mm");

   return {
      date: currentDate,
      time: formattedTime,
   };
};

export default determineTimeAndDate;
