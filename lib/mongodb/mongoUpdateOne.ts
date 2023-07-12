import { connectToDatabase } from "lib/mongodb";
import { UpdateResult } from "mongodb";

const mongoUpdateOne = async (
   collectionName: string,
   documentId: string,
   propertyToUpdate: string,
   updatedValue: any
): Promise<UpdateResult> => {
   let { db } = await connectToDatabase();

   const filter = { _id: documentId };

   const result = await db
      .collection(collectionName)
      .updateOne(filter, { $set: { [propertyToUpdate]: updatedValue } });

   return result;
};

export default mongoUpdateOne;
