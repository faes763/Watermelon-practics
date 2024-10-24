'use client'

import { useEffect, useLayoutEffect } from "react";
import { authClient } from "../core-axios/auth/client";
import { useUserStore } from "../store/user-store";
import { useShallow } from "zustand/react/shallow";
import { userClient } from "../core-axios/user";

export function ProviderUser() {

    useLayoutEffect(()=>{
        authClient.checkAddToken();
    },[]);

    const [loading] = useUserStore(useShallow(state=>[state.loading]))

    useLayoutEffect(()=>{

        if(loading) {
            userClient.getUser();
        }    
    },[loading]);

    return null;
}