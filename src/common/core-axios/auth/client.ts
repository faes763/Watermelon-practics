import { axiosCfg } from "..";
import { setCookie } from "nookies";
import Cookies from 'js-cookie';
import { useUserStore } from "@/common/store/user-store";


interface IBodyAuth {
    password: string;
    email: string;
}

interface IDataResponseLogin {
    access: string;
    refresh: string;
}

class AuthClient {
    login = async (body:IBodyAuth) => {
        const data = await axiosCfg.post('/login/', body).then(res=>res.data) as IDataResponseLogin;
        setCookie(null,"token", String(data.access));

        this.checkAddToken();

        return data;
    }

    removeToken = () => {
        setCookie(null,"token", "");
    }

    register = async (body:IBodyAuth) => {
        const data = await axiosCfg.post('/register/', body).then(res=>res.data);
        return data;
    }

    checkAddToken = () => {
        useUserStore.getState().setLoading(true);
        const token = Cookies.get('token');
        if(token)
            axiosCfg.interceptors.request.use(
                config => {
                    config.headers.Authorization = `Bearer ${token}`;
                    useUserStore.getState().setLoading(false);
                    return config;
                },
                error => Promise.reject(error)
            );

    }
}
export const authClient = new AuthClient();