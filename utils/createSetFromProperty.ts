const createSetFromProperty = <T>(
   arr: T[],
   property: keyof T
): Set<T[keyof T]> =>
   arr.reduce((set, obj) => {
      set.add(obj[property]);
      return set;
   }, new Set<T[keyof T]>());

export default createSetFromProperty;
