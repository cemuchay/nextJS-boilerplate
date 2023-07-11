const CalculateBags = (totalFeed: number) => {
   return Math.ceil(totalFeed / 15);
};

export default CalculateBags;
