function getGreeting(timeString: string, name: string): string {
   const [hour, minute] = timeString.split(":").map(Number);
   const isPM = /pm/i.test(timeString);

   let greeting: string;

   if (hour >= 0 && hour < 12) {
      greeting = "Good morning";
   } else if (hour >= 12 && hour < 16) {
      greeting = "Good afternoon";
   } else {
      greeting = "Good evening";
   }

   if (isPM && hour !== 12) {
      greeting = "Good evening";
   }

   return `${greeting}, ${name}!`;
}

export default getGreeting;
