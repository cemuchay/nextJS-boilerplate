function calculateDaysBetween(startDate: string, endDate: string): number {
    // Convert both dates to milliseconds
    const startMs = new Date (startDate).getTime();
    const endMs = new Date (endDate).getTime();
  
    // Calculate the difference in milliseconds
    const diffMs = endMs - startMs;
  
    // Convert the difference to days
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  
    // Add one to include the final day
    return diffDays ;
  }

  export default calculateDaysBetween;
  