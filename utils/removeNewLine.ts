function removeNewLinesAfterMM(text: string): void {
   // search for the all occurrences of "MM" in the text and remove next new line
   const regex = /MM/g;
   let m;
   while ((m = regex.exec(text)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
         regex.lastIndex++;
      }
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
         // console.log(`Found match, group ${groupIndex}: ${match}`);
         const index = text.indexOf(match);
         const nextChar = text[index + 2];
         if (nextChar === "\n") {
            text = text.slice(0, index + 2) + text.slice(index + 3);
         }
      });

      return removeNewLinesAfterMM(text);
   }
}

const removeNewLine = (str: string) => {
   str = str.replace(/\n\n+/g, "\n" + "\n");

   if (str.endsWith("\n")) {
      str = str.slice(0, -2);
   }
   if (str.startsWith("\n")) {
      str = str.slice(1);
   }

   return str;
};

export default removeNewLine;
