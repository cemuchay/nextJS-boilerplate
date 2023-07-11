import Data from "lib/types/responseFormat";
import { NextApiRequest, NextApiResponse } from "next";

// Define a type to represent valid HTTP methods
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Validates if the requested HTTP method is accepted for a given route.
 * @param requestedMethod The HTTP method requested by the client.
 * @param acceptedMethods An array of accepted HTTP methods for the route.
 * @param res The NextApiResponse object used to send the response.
 * @returns A boolean indicating if the requested method is accepted or not.
 */
const validateAcceptedRoutes = (
   requestedMethod: NextApiRequest["method"],
   acceptedMethods: HttpMethod[],
   res: NextApiResponse<Data>
) => {
   // Check if the requested method is included in the acceptedMethods array
   if (!acceptedMethods.includes(requestedMethod as HttpMethod)) {
      // If the requested method is not allowed, send a "Method Not Allowed" response
      res.status(405).json({
         success: false,
         data: null,
         message: `${requestedMethod} method not allowed on this route`,
      });
      return false; // Indicate that the requested method is not accepted
   }

   // If the requested method is allowed, return true to indicate acceptance
   return true;
};

export default validateAcceptedRoutes;
