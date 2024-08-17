import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../common/apiService";

export const useTradeDetailItem = (id: string) => {
  const tradeDetailItem = () => {
    return apiService.get(`/trade/${id}`);
  };

  return useQuery({
    queryKey: ["getTradeDetail"],
    queryFn: tradeDetailItem,
    select: (data) => {
      return data.data;
    },
  });
};
