import { connectToDatabase } from "lib/mongodb";

const addDocument = async (
   collection: string,
   document: object | object[],
   many?: boolean
) => {
   const { db } = await connectToDatabase();
   if (many) {
      if (Array.isArray(document)) {
         try {
            const result = await db
               .collection(collection)
               .insertMany(document as any);
            return { ...result, error: null };
         } catch (error) {
            console.log(error);
            return {
               acknowledged: false,
               insertedId: null,
               error,
            };
         }
      } else {
         const error = new Error("document must be an array");
         console.log(error);
         return {
            acknowledged: false,
            insertedId: null,
            error,
         };
      }
   }

   try {
      const result = await db.collection(collection).insertOne(document);
      return { ...result, error: null };
   } catch (error) {
      console.log(error);
      return {
         acknowledged: false,
         insertedId: null,
         error,
      };
   }
};

export default addDocument;
