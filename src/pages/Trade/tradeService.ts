import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../common/apiService";

export const useAllTradeItem = () => {
  const allTradeItem = () => {
    return apiService.get("/trade");
  };

  return useQuery({
    queryKey: ["getAllTradeItem"],
    queryFn: allTradeItem,
    select: (data) => {
      return data.data;
    },
  });
};
