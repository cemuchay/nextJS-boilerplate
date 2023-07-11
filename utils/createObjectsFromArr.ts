function createObjectsFromArr<T>(
   arr: T[],
   n: number,
   propName: string
   //@ts-ignore
): { [propName]: T[] }[] {
   //@ts-ignore
   const result: { [propName]: T[] }[] = [];
   const length = arr.length;

   for (let i = 0; i < length; i += n) {
      result.push({ [propName]: arr[i] });

      // result.push({ [propName]: arr.slice(i, i + n) });
   }

   return result;
}

export default createObjectsFromArr;
