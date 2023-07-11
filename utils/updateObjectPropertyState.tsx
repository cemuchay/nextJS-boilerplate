const updateObjectPropertyState = (prevData: any, propertyName: string, newData: any) => {
   return {
      ...prevData,
      [propertyName]: newData,
   };
};

export default updateObjectPropertyState;
