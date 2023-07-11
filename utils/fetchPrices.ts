import { connectToDatabase } from "../lib/mongodb";

const fetchPrices = async () => {
   // connect to the database
   let { db } = await connectToDatabase();

   // fetch the posts
   let info = await db
      .collection("AppInfo")
      // make .find find field with 'feedSizeAndFCR' in it
      .find({ feedSizeAndFCR: { $exists: true } })
      .sort({ published: -1 })
      .toArray();

   const details = info[0].feedSizeAndFCR;

   // map details and set the feedSizeAndFCR
   return details.map((data: any) => {
      if (data.feedSize) {
         return {
            size: data.feedSize,
            price: data.price,
            FCR: data.FCR,
         };
      } else {
         return {
            size: "",
            price: 0,
            FCR: 0,
         };
      }
   });
};

export default fetchPrices;
