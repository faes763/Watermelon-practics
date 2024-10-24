import { IUser } from "@/common/types/user.type";
import { axiosCfg } from ".."
import { useUserStore } from "@/common/store/user-store";
import { authClient } from "../auth/client";
import { redirect } from "next/navigation";
import { navigate } from "@/common/utils/navigate";

class UserClient {

    getUser = async (): Promise<IUser | null> => {
        try {
            const data = await axiosCfg.get('/profile/').then(res=>res.data) as IUser;

            useUserStore.getState().setUser(data);
    
            this.getTasks();
            return data;

        } catch (error: any) {
            console.error(error);
            if(error?.status === 401) {
                authClient.removeToken();
                // redirect('/auth');
                navigate('/auth');
            }
            
            return null;
        }

    }

    updateUser = async(body: IUser) => {
        const data = await axiosCfg.patch('/profile/',body).then(res=>res.data) as IUser;

        useUserStore.getState().setUser(data);

        return data;
    }

    getTasks = async (limit: string | number = 3, offset: string | number = 0) => {
        const data = await axiosCfg.get(`/tasks/?limit=${limit}&offset=${offset}`).then(res=>res.data) as any[];
        console.log(data);
        
        return data;
    }
}

export const userClient = new UserClient();