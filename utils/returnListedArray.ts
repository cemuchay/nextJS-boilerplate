const returnListedArray = (
   title: string,
   arr: Array<any>,
   param: string,
   excludedValues?: any
): string => {
   const names = arr
      .map((obj) => obj[param])
      .filter((value) => !excludedValues.includes(value))
      .map((value, index) => `${index + 1}. ${value}`);
   return `${title} \n\n${names.join("\n")}`;
};

export default returnListedArray;
