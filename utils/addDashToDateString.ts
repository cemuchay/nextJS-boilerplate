const addDashToDateString = (date: string) => {
   const dateArr = date.split(" ");
   return dateArr.join("-");
};

export default addDashToDateString;
