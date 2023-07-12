import { connectToDatabase } from "lib/mongodb";

const filterQueryCollection = async (
   collection: string,
   query: object,
   sort?: any
) => {
   const { db } = await connectToDatabase();
   const result = await db
      .collection(collection)
      .find(query)
      .sort(sort)
      .toArray();

   return result;
};

export default filterQueryCollection;
