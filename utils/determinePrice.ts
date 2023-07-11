import fetchPrices from "./fetchPrices";

const determinePrice = async (feedSize: string) => {
   const feedPrices = await fetchPrices();

   // find the price of the feedSize from feedPrices
   const price = feedPrices.find((data: any) => data.size === feedSize);
   if (price) {
      // give type to price
      const priceType = price as { price: number };
      return priceType.price;
   } else {
      return 0;
   }
};

export default determinePrice;
