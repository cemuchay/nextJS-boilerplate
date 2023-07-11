import { convertNaira } from "./mathConverter";

const calculatePrice = (price: number, totalBags: number) => {
   return convertNaira(price * totalBags);
};

export default calculatePrice;
