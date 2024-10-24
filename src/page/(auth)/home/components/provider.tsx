'use client'

import { useEditHome } from "@/common/store/toggle-store";
import { useShallow } from "zustand/react/shallow";
import { HomeUser } from "./user";
import { UserEdit } from "./edit";

export function ProviderUserOrEdit() {
    const isOpen = useEditHome(useShallow(state=>state.isOpen));

    return isOpen ? <UserEdit/> : <HomeUser/>;
}