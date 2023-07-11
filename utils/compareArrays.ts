const compareArrays = (arrayA: any, arrayB: any) => {
   const pondNamesA = arrayA;
   const pondNamesB = arrayB.map((item: { pondDetails: any }) => item.pondDetails.pondName);

   return pondNamesB.filter((name: any) => !pondNamesA.includes(name));
};

export default compareArrays;
