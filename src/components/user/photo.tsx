'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";

export function UserPhotoComp({
    className=""
}: {
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { profile_picture } = user;
            return { profile_picture };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        user.profile_picture ? (
            <Image
                src={user.profile_picture}
                alt=""
                width={256}
                height={256}
                className={cn(" rounded-full",className)}
            />
        ) : (
            <div className={cn(" bg-main_blue/25 rounded-full",className)}/>
        )
        // <span className={cn(className)}>{user.profile_picture || "Заполните дату рождения"}</span>
    );
}