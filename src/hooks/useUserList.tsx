interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

import { useSwr } from "@/hooks/useSwr";
import { EP } from "@/fetch/fetcher";

export function useUserList() {
    const { data, error } = useSwr<User[]>(EP.users());

    return {
        users: data,
        isLoading: !error && !data,
        error: error,
    };
}
