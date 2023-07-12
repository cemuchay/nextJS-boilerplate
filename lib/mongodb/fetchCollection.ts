import { connectToDatabase } from "lib/mongodb";

/**
 * Fetches documents from a collection in the database.
 *
 * @param {string} collectionName - The name of the collection to fetch documents from.
 * @param {string} [sortProperty] - The property to sort the documents by. Defaults to "published".
 * @param {number} [limit] - The maximum number of documents to retrieve. Defaults to 0 (no limit).
 * @param {object} [find] - The query object to filter the documents. Defaults to an empty object (no filter).
 * @returns {Promise<any[]>} - A Promise that resolves to an array of documents from the collection.
 * @throws {Error} - Throws an error if there is an issue connecting to the database or fetching the data.
 */
const fetchCollection = async (
   collectionName: string,
   sortProperty?: string,
   limit?: number,
   find?: object
): Promise<any[]> => {
   try {
      // Connect to the database
      const { db } = await connectToDatabase();

      // Fetch the documents from the collection
      const data: any[] = await db
         .collection(collectionName)
         .find(find ? find : {})
         .sort({ [sortProperty ? sortProperty : "published"]: -1 })
         .limit(limit ? limit : 0)
         .toArray();

      return data;
   } catch (error: any) {
      throw new Error(error);
   }
};

export default fetchCollection;
