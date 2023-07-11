import moveObjectPropertyToTop from "./moveObjPropertyToTop";

const sortPonds = (
   ponds: Array<any>,
   property?: string,
   mode?: "asc" | "desc"
) => {
   // sort ponds by name and append a new property to each pond called no

   const check = property ? property : "pondName";

   const sortedPonds = ponds
      .sort((a, b) => {
         if (a[check] < b[check]) {
            if (mode === "desc") {
               return 1;
            } else {
               return -1;
            }
         }
         if (a[check] > b[check]) {
            if (mode === "desc") {
               return -1;
            } else {
               return 1;
            }
         }
         return 0;
      })
      .map((pond, index) => {
         if (pond[check] === undefined) {
            pond.no = index + 1;
            return moveObjectPropertyToTop(pond, "no");
         }

         if (pond[check] === "TOTAL" || !pond[check]) {
            return pond;
         } else {
            pond.no = index + 1;
            return moveObjectPropertyToTop(pond, "no");
         }
      });

   return sortedPonds;
};

export default sortPonds;
