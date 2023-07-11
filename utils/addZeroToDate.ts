const addZeroToDate = (dateString: string): string => {
   const date = new Date(dateString);
   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, "0"); // add leading zero if necessary
   const day = date.getDate().toString().padStart(2, "0"); // add leading zero if necessary
   return `${year}-${month}-${day}`;
};

export default addZeroToDate;
