import axios from "axios";

export const axiosCfg = axios.create({
    baseURL: process.env.BASE_URL,
});

export const axiosClientCfg = axios.create({
    baseURL: process.env.FRONTEND_URL,
});

export const baseServerFetch = (url: string,method?: "POST" | "GET",options?: RequestInit,body?: any) => {
    return fetch(process.env.BASE_URL + url, {
        next: {
            revalidate: 300,
        },
        method: method || "GET",
        body: JSON.stringify(body),
        ...options, 
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return false;
        }
    }).catch(console.error); // для ssr компонентов
};

export const serverFetch = (url: string) => fetch(url).then((res) => {
    if(res.ok) {
        return res.json();
    } else {
        return false;
    }
}).catch(console.error) // для ssr компонентов