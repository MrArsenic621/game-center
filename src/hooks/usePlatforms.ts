import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 12 * 60 * 60 * 1000, //12h
  });

export default usePlatforms;
