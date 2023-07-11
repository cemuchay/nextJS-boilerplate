import axios, { AxiosResponse, AxiosError } from "axios";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

interface CustomSWRResponse<Data> extends SWRResponse<Data, AxiosError> {
   isLoading: boolean;
}

/**
 * Custom hook that fetches data using axios and SWR.
 *
 * @param url - The URL to fetch the data from.
 * @param headers - Optional headers to include in the request.
 * @param revalidate - Optional flag to specify if data should be revalidated on focus.
 * @param options - Optional SWR configuration options.
 * @returns An object containing the data, error, and isLoading flag.
 */
const useAxiosSWR = <Data>(
   url: string,
   headers?: any,
   revalidate: boolean = true,
   options: SWRConfiguration = {}
): CustomSWRResponse<Data> => {
   const fetcher = async (url: string): Promise<Data> => {
      try {
         const res: AxiosResponse<Data> = await axios.get(url, {
            headers: headers,
         });
         return res.data;
      } catch (error: AxiosError | any) {
         if (error.response?.status === 401) {
            throw new Error("Unauthorized");
         }
         throw new Error("Failed to fetch data");
      }
   };

   const { data, error }: SWRResponse<Data> = useSWR<Data>(url, fetcher, {
      revalidateOnFocus: revalidate,
      refreshInterval: 0,
      ...options,
   });

   const isLoading: boolean = !error && !data;

   //@ts-ignore
   return {
      data,
      error,
      isLoading,
   };
};

export default useAxiosSWR;
