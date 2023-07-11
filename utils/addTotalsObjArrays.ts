interface ObjectWithNumbers<T extends string> {
   //@ts-ignore
   [key: T]: number;
}

interface ObjectWithTotals<T extends string> extends ObjectWithNumbers<T> {
   totals: ObjectWithNumbers<T>;
}

function addTotalsObjArrays<T extends string>(
   arr: ObjectWithNumbers<any>[]
): ObjectWithTotals<T>[] {
   const totals: ObjectWithNumbers<T> = {};

   // Loop through each object in the array
   arr.forEach((obj) => {
      // Loop through each property of the object
      Object.entries(obj).forEach(([key, value]) => {
         if (typeof value === "number") {
            // If the property is a number, add it to the corresponding total
            //@ts-ignore
            totals[key] = (totals[key] || 0) + value;
         }
      });
   });

   // Add the totals object to each object in the array
   return arr.map((obj) => ({
      ...obj,
      totals,
   }));
}

export default addTotalsObjArrays;
