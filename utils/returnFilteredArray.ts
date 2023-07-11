interface MyObject {
   [key: string]: any;
 }
 
 function returnFilteredArray<T extends MyObject>(
   arr: T[],
   property: keyof T | (keyof T)[],
   value: T[keyof T] | T[keyof T][],
   mode: "and" | "or" = "and",
   sortFcn?: {
     fcn: any;
     property: keyof T;
     order?: "asc" | "desc";
   }
 ): T[] {
   const properties = Array.isArray(property) ? property : [property];
   const values = Array.isArray(value) ? value : [value];
 
   const Arr = arr.filter((obj: T) => {
     if (mode === "and") {
       return properties.every(prop => {
         const propValue = obj[prop].toString().toLowerCase();
         return values.some(searchValue => propValue === searchValue.toString().toLowerCase());
       });
     } else {
       return properties.some(prop => {
         const propValue = obj[prop].toString().toLowerCase();
         return values.some(searchValue => propValue === searchValue.toString().toLowerCase());
       });
     }
   });

   if (sortFcn) {
     return sortFcn.fcn(Arr, sortFcn.property);
   }
 

   return Arr;
 }
 
 export default returnFilteredArray;
 


