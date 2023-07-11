const returnISODate = (dateString: string) => {
    const dateParts = dateString.split(" "); // split the string into an array of individual parts
    const day = dateParts[0]; // extract the day (as a string)
    const monthName = dateParts[1]; // extract the month name (as a string)
    const year = dateParts[2]; // extract the year (as a string)
 
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth() + 1; // convert month name to month index (e.g. "March" -> 3)
    const month = monthIndex.toString().padStart(2, "0"); // format month as two-digit string
 
    const isoDateString = `${year}-${month}-${day}`;
    return isoDateString;
 };

 export default returnISODate