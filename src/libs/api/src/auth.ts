import {useMutation, useQuery, useQueryClient} from "react-query";
import {queryCreate, queryGet} from "./fetch";
import {useCallback} from "react";
import {AxiosError} from "axios";

export interface User {
    id: number,
    mail: string,
    password: string,
    isActive: boolean,
}

export const useLogout = () => {
    const queryClient = useQueryClient();

    const onLogout = useCallback(() => {
        queryClient.invalidateQueries();
        queryClient.removeQueries();
        window.location.replace('/login');
    }, [queryClient]);

    return useMutation<void, AxiosError, void>(queryCreate(`/v2/auth/logout`), {
        onSuccess: onLogout,
        onError: onLogout,
    });
};

export const useMe = (allowAnonymous?: boolean) => {
    const queryClient = useQueryClient();
    const { mutate: logout } = useLogout();

    return useQuery<User, AxiosError>(
        ['auth', 'me'],
        queryGet('auth/profile'),
        {
            staleTime: 1000 * 60, // 1 min
            onSuccess: (data) => {
                queryClient.setQueryData(['account', data.id], data);
            },
            retry: (count, error) => {
                if (error.response && error.response.status === 401) {
                    return false;
                }
                return count < 2;
            },
            onError: () => {
                if (!allowAnonymous) {
                    logout();
                }
            },
        },
    );
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation<User, undefined, { email: string; password: string }>(
        queryCreate(`/auth/signin`),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['account', data.id], data);
                queryClient.setQueryData(['auth', 'me'], data);
            },
        },
    );
};