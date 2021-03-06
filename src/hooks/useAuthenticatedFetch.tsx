import { useEffect, useState } from "react";

const baseURL = "https://api.themoviedb.org/3";
const apiKeyParam = "api_key";

const useAuthenticatedFetch = (
  urlPath: string,
  verb: string = "GET",
  params: Record<string, unknown> = {}
) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  if (!apiKey) {
    throw Error("No API key defined");
  }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const queryParams: Record<string, string> = {
    ...params,
    [apiKeyParam]: apiKey,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `${baseURL}${urlPath}?${queryString}`;

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };

    fetchRequest();
  }, [url]);

  return { data, isLoading };
};

export { useAuthenticatedFetch };
