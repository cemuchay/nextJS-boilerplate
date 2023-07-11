const returnGreeting = () => {
   // check time of the day and return appopriate greeting

   const time = new Date().getHours();
   
   if (time < 12) {
      return "Good morning";
   }
   if (time < 16) {
      return "Good afternoon";
   }

   return "Good evening";
};

export default returnGreeting;
