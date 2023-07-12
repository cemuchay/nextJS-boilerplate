import { connectToDatabase } from "lib/mongodb";

const fetchCollectionByProjection = async (
   projection: Object,
   collection: string,
   filter?: Object,
) => {
   const { db } = await connectToDatabase();
   const result = await db
      .collection(collection)
      .find(
         {},
         {
            projection: projection,
         }
      ).filter(filter? filter : {}).toArray();

   return result;
};

export default fetchCollectionByProjection;

// const projection = {
//    "pondDetails.pondName": 1,
//    "pondDetails.noFish": 1,
//    "pondDetails.staff": 1,
//    "pondDetails.endDate": 1,
//    "pondDetails.releaseData.lastReleaseDate": 1,
//    "pondDetails.releaseData.nextReleaseDate": 1,
//    "pondDetails.releaseData.preferredReleaseSession": 1,
//    "pondDetails.releaseData.releaseFrequency": 1,
// };
// const result = await fetchCollectionByProjection(projection);
