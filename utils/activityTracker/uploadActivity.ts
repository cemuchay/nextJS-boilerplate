import { connectToDatabase } from "lib/mongodb";
import determineTimeAndDate from "utils/determineTimeAndDate";

const uploadActivity = async (
   name: string,
   message: string,
   referer?: string,
   userAgent?: string,
   clientRequestTime?: string
) => {
   let { db } = await connectToDatabase();
   const { date, time } = determineTimeAndDate();

   try {
      await db.collection("activityTracker").insertOne({
         date,
         time: clientRequestTime || time,
         message: `${name} ${message}`,
         metaData: {
            referer,
            userAgent,
         },
      });
   } catch (error) {
      throw error;
   }
};

export default uploadActivity;
