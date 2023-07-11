type ObjectWithValues = {
    [key: string]: string | number;
 };
 
 function searchArrayObjects(
    arr: ObjectWithValues[],
    searchTerm: string,
    caseSensitive: boolean = false
 ): ObjectWithValues[] {
    const searchResults: ObjectWithValues[] = [];
 
    const formattedSearchTerm = caseSensitive ? searchTerm : searchTerm.toLowerCase();
 
    for (const obj of arr) {
       const values = Object.values(obj);
       let matchFound = false;
 
       for (const value of values) {
          const formattedValue = caseSensitive ? value.toString() : value.toString().toLowerCase();
 
          if (
             (typeof value === "string" && formattedValue.includes(formattedSearchTerm)) ||
             (typeof value === "number" && formattedValue.includes(formattedSearchTerm))
          ) {
             matchFound = true;
             break;
          }
       }
 
       if (matchFound) {
          searchResults.push(obj);
       }
    }
 
    if (searchResults.length === 0) {
       const emptyObject: ObjectWithValues = {};
       for (const key of Object.keys(arr[0])) {
          emptyObject[key] = "";
       }
       searchResults.push(emptyObject);
    }
 
    return searchResults;
 }
 
 export default searchArrayObjects;
 

 /* If you don't want a case-sensitive search, you can simply call the searchArrayObjects function without providing the caseSensitive parameter or by passing false explicitly. Here are a few examples:

Example 1: Calling searchArrayObjects without providing the caseSensitive parameter (default is false):

typescript
Copy code
const result = searchArrayObjects(arr, searchTerm);
Example 2: Calling searchArrayObjects with caseSensitive set to false explicitly:

typescript
Copy code
const result = searchArrayObjects(arr, searchTerm, false);
In both cases, the search will be performed in a case-insensitive manner, as the default value for caseSensitive is false. 
*/