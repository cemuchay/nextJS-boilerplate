const returnListedStringArray = (arr: string[], title: string): string => {
   const listItems = arr.join("\n");
   if (title == "") return `\n${listItems}`;
   return `${title}\n${listItems}`;
};

export default returnListedStringArray;
