'use client'

import { authClient } from "@/common/core-axios/auth/client";
import { useCreateTaskDialog } from "@/common/store/toggle-store";
// TODO
// переделать на sildebar

import { Sprite } from "@/common/ui/sprite";
import Image from "next/image";
import Link from "next/link";

export const navLinks = [
    // {
    //     name: "Главная",
    //     sprite: "home",
    //     href: "/profile",
    //     navName: "Мой профиль",
    // },
    {
        name: "Мой профиль",
        sprite: "profile",
        href: "/profile",
        navName: "Мой профиль",
    },
    {
        name: "Задачи",
        sprite: "tasks",
        href: "/tasks",
        navName: "Задачи",
    },
    {
        name: "Добавить задачу",
        sprite: "plus",
        // href: "/"
        onclick: useCreateTaskDialog.getState().open,
    },
   
    // {
    //     name: "Помощь",
    //     sprite: "question",
    //     href: "/question",
    //     navName: "Мой профиль",

    // },
]

export function Navigation() {

    const exit = () => {
        authClient.removeToken();
    }

    return(
        <nav className="flex text-xl max-md:h-20 max-md:fixed bottom-0 z-20 max-h-screen font-semibold text-white md:flex-col justify-between px-8 md:py-24 py-6 bg-nav w-full">
            <Link href={'/profile'} className=" max-md:hidden flex items-center justify-center">
                <Image
                    src={'/icon.svg'}
                    alt=""
                    width={300}
                    height={100}
                    className=" w-24 h-8 object-cover"
                />
            </Link>

            <div className=" max-md:contents md:space-y-14">
                {navLinks.map((link,idx)=>(
                    <AsLink key={link.name+idx} {...link} className="flex gap-5 items-center">
                        <Sprite
                            className="w-8 h-8"
                            name={link.sprite}
                            isImage
                        />
                        <span className=" max-md:hidden">
                            {link.name}
                        </span>
                    </AsLink>
                ))}
            </div>

            <div className=" max-md:contents md:space-y-7">
                <Link onClick={exit} className="flex gap-5 items-center" href={'/auth'}>
                    <Sprite
                        className="w-8 h-8"
                        name={"exit"}
                        isImage
                    />
                    <span className=" max-md:hidden">
                        Выйти
                    </span>
                </Link>
                <Link onClick={exit} className="flex gap-5 items-center whitespace-nowrap" href={'/auth'}>
                    <Sprite
                        className="w-8 h-8"
                        name={"refresh"}
                        isImage
                    />
                        <span className=" max-md:hidden">
                            Сменить аккаунт
                        </span>
                </Link>
            </div>

        </nav>
    );
}

function AsLink({
    href,
    onclick,
    children,
    className
}:{
    href?:string,
    onclick?: () => void,
    children: React.ReactNode;
    className?: string;
}) {
    return href ? (
    <Link href={href} className={className}>
        {children}
    </Link>
    ) : (
    <button onClick={onclick} className={className}>
        {children}
    </button>
    )
}