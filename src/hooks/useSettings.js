import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../services/apiSettings";

export function useSettings() {
  const {
    isLoading: isQueryPending,
    data: settings,
    error: queryError,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isQueryPending, settings, queryError };
}
