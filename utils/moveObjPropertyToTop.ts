function moveObjectPropertyToTop<T>(obj: T, key: keyof T): T {
    const { [key]: value, ...rest } = obj;
    //@ts-ignore
    return { [key]: value, ...rest };
  }
export default moveObjectPropertyToTop;  