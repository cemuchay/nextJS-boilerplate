function resetObjectProperties(obj: Record<string, any>): Record<string, any> {
    const resetObj: Record<string, any> = {};
  
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        resetObj[key] = [];
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        resetObj[key] = resetObjectProperties(obj[key]);
      } else {
        resetObj[key] = typeof obj[key] === 'string' ? '' : false;
      }
    }
  
    return resetObj;
  }
  
  

  export default resetObjectProperties