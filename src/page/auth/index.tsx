'use client'


import { useEffect, useState } from "react";
import { Form } from "./components/form";
import { Button } from "@/components/ui/button";

export type TFormState = "login" | "register";

export function Auth() {

    const [state,setState] = useState<TFormState>("login");

    const handleChangeState = () => {
        setState(prev=>{
            if(prev === "login") return "register";

            return "login";
        });
    }

    return(
        <main className=" fixed inset-0 flex items-center justify-center">
            <div className=" mx-10 md:max-w-[42.5rem] w-full bg-main_white p-16 rounded-[2rem]">
                <p className=" text-5xl text-center font-bold">
                    {state === "login" ? "Войти" : "Регистрация"}
                </p>
                <p className=" mt-5 text-[#0A0A2854] font-light text-center">{state === "login" ? "Вперёд к новым задачам!" : "Добро пожаловать в команду!"}</p>
                <Form setState={setState} state={state}/>
                <Button 
                    className=" w-full mt-11" 
                    variant={'outline'}
                    onClick={handleChangeState}
                >
                    {state === "login" ? "Создать аккаунт" : "Уже есть аккаунт?"}
                </Button>
            </div>
        </main>
    );
}