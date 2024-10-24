import { getCookie } from "@/common/core-axios/auth/server";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { redirect } from "next/navigation";
import { Fragment, ReactNode } from "react";

export default function AuthLayout({children}:{children:ReactNode}) {

    const token = getCookie();
    if(!token)
        redirect('/auth');

    return (
        <div className=" h-screen overflow-hidden md:grid md:grid-cols-[20rem_1fr] ">
            <Navigation/>
            <div className="bg-[url(/images/bg-main.png)]  flex flex-col pt-11 md:pl-12 max-md:px-5 text-main_blue bg-cover">
                <Header />
                <div className=" md:max-h-[calc(100vh-2.75rem)] max-h-[calc(100vh-5rem-6rem)] md:pb-20 pb-12 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}