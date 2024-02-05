import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export function useCurrentUser(options?: UseQueryOptions<CurrentUser>) {
  return useQuery<CurrentUser>({
    queryKey: ["/auth/users/me/"],
    ...options,
  });
}
