const splitStringBySymbol = (input: string, symbol: string, count: number): string[] => {
    const result: string[] = [];

    const items = input.split(symbol).map((item) => item.trim());
  
    for (let i = 0; i < items.length; i += count) {
      const lastIdx = Math.min(i + count, items.length);
      result.push(items.slice(i, lastIdx).join(symbol));
    }
  
    return result;
};

export default splitStringBySymbol;
