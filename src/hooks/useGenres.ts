import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 12 * 60 * 60 * 1000, //12h
  });

export default useGenres;
