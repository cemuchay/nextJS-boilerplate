import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * Makes an authorized user request using axios.
 *
 * @param url - The API endpoint URL.
 * @param method - The HTTP method for the request.
 * @param body - The request body data.
 * @param headers - The request headers.
 * @returns A Promise that resolves to the response data or rejects with the error data.
 */
const axiosReq = async <T>(
   url: string,
   method: "delete" | "get" | "post" | "put" | "patch",
   body?: any,
   headers?: any
): Promise<T> => {
   try {
      const config: AxiosRequestConfig = {
         method,
         url: `${url}`,
         headers,
         data: body,
      };

      const response: AxiosResponse<T> = await axios(config);
      return response.data;
   } catch (error: AxiosError | any) {
      if (error.response) {
         // The request was made and the server responded with a status code
         return Promise.reject(error.response.data);
      } else if (error.request) {
         // The request was made but no response was received
         return Promise.reject("No response received");
      } else {
         // Something happened in setting up the request
         return Promise.reject(error.message);
      }
   }
};

export default axiosReq;
