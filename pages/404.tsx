import Router from "next/router";

const Custom404 = () => {
   return (
      <>
         <div className="text-center m-5">
            <h3 className="h3 m-5">This Page Does Not Exist</h3>
            <div onClick={() => Router.push("/")} className="btn btn-danger">
               Return To Home Page
            </div>
         </div>
      </>
   );
};

export default Custom404;
