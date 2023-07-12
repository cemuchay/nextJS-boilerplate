import { connectToDatabase } from "lib/mongodb";
import { ObjectId } from "mongodb";

const mongoReplaceOne = async (
   collection: string,
   query: object,
   data: any,
   id: any,
   spreadData?: boolean
) => {
   let { db } = await connectToDatabase();

   /* This code is performing a MongoDB `replaceOne` operation on a specified collection. It is replacing
a single document that matches the specified query with the provided data object. The `_id` field of
the document is set to a new `ObjectId` instance with the provided `id` value. The result of the
operation is stored in the `replace` variable and returned from the function. */
   let replace;
   if (spreadData) {
      replace = await db.collection(collection).replaceOne(query, {
         ...data,
         _id: new ObjectId(id),
      });
   } else {
      replace = await db.collection(collection).replaceOne(query, {
         data,
         _id: new ObjectId(id),
      });
   }

   return replace.acknowledged;
};

export default mongoReplaceOne;
