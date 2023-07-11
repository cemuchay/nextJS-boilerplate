const isDateBetween = (
   dateA: string,
   dateB: string,
   dateC: string
): boolean => {
   const parsedDateA = new Date(dateA);
   const parsedDateB = new Date(dateB);
   const parsedDateC = new Date(dateC);

   return parsedDateA >= parsedDateB && parsedDateA < parsedDateC;
};

export default isDateBetween;
