import axios from "@/lib/axios";

// APIエンドポイント
export const EP = {
    // ユーザー一覧
    users: () => "/api/users",

}

export const fetcherGet = async <T>(url: string): Promise<T> =>
    axios.get<T>(url)
        .then((res) => res.data)
        .catch((err) => {
            if (err?.message.startsWith("Network Error")) err.response = {message: "Network Error"}
            throw err.response
        });

export const fetcherPost = <T>(url: string, body: Object = {}) =>
    axios.post<T>(url, body)
        .then((res) => {
            return {data: res.data, err: undefined}
        })
        .catch((err) => {
            return {data: null, err: err.response}
        })

export const fetcherPut = <T>(url: string, body: Object = {}) =>
    axios.put<T>(url, body)
        .then((res) => {
            return {data: res, err: undefined}
        })
        .catch((err) => {
            return {data: undefined, err: err.response}
        })
