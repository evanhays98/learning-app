import {useMutation, useQuery, useQueryClient} from "react-query";
import {queryCreate, queryGet} from "./fetch";
import {useCallback} from "react";
import {AxiosError} from "axios";

interface UserLogin {
    access_token: string,
    userInfo: User
}

export interface User {
    id: number,
    mail: string,
    password: string,
    pseudo: string;
    isActive: boolean,
}

export interface CreateUserDto {
    mail: string,
    password: string,
    pseudo: string;
}

export interface LoginUserDto {
    mail: string,
    password: string,
}

export const useLogout = () => {
    const queryClient = useQueryClient();

    const onLogout = useCallback(async () => {
        await queryClient.invalidateQueries();
        queryClient.removeQueries();
        window.location.replace('/');
    }, [queryClient]);

    return useMutation<void, AxiosError, void>(queryCreate(`/v2/auth/logout`), {
        onSuccess: onLogout,
        onError: onLogout,
    });
};

export const useMe = () => {
    const queryClient = useQueryClient();
    const {mutate: logout} = useLogout();

    return useQuery<User, AxiosError>(
        ['auth', 'me'],
        queryGet('/auth/me'),
        {
            staleTime: 1000 * 60, // 1 min
            onSuccess: (data) => {
                queryClient.setQueryData(['account', data.id], data);
            },
            retry: (count, error) => {
                if (error.response && error.response.status === 401) {
                    logout()
                }
                return count < 2;
            },
        },
    );
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation<UserLogin, undefined, LoginUserDto>(
        queryCreate(`/auth/signin`),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['account', data.userInfo.id], data.userInfo);
                queryClient.setQueryData(['auth', 'me'], data.userInfo);
            },
        },
    );
};

export const useSignUp = () => {
    const queryClient = useQueryClient();
    return useMutation<UserLogin, undefined, CreateUserDto>(
        queryCreate(`/auth/signup`),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['account', data.userInfo.id], data.userInfo);
                queryClient.setQueryData(['auth', 'me'], data.userInfo);
            },
        },
    );
};