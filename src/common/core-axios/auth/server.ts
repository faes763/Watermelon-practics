import { cookies } from 'next/headers';

export const getCookie = () => {
    if(cookies().has("token")) return cookies().get("token")?.value;

    return "";
}