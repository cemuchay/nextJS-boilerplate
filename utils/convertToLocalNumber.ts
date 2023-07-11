const convertToLocalNumber = (num: number) => {
   return `+234${num.toString().slice(1)}`;
};
export default convertToLocalNumber;
