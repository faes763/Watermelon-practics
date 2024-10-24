'use client'

import { useCreateTaskDialog } from "@/common/store/toggle-store";
import { useUserStore } from "@/common/store/user-store";
import { Sprite } from "@/common/ui/sprite";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { InputForm } from "@/common/ui/form";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useFormik } from "formik";





export function CreateTaskDialog() {
    const {open, close, isOpen} = useCreateTaskDialog();


    return(
        <Dialog open={isOpen} onOpenChange={(is) => is ? open() : close()}>
            <DialogContent
                className=" bg-main_white pb-0 pt-4 rounded-3xl px-16 max-w-2xl"
            >
                <DialogTitle className=" mt-2 text-main-task text-5xl font-bold text-center">
                    НОВАЯ ЗАДАЧА
                </DialogTitle>
                <Form/>

            
            </DialogContent>
        </Dialog>
    );
}


const Schema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    status: z.string().readonly(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
});

const Form = () => {
    
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            status: "",
            start_date: "",
            end_date: "",
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            try {
                console.log(values);


            } catch (error) {
                console.error(error);
                alert("Произошла ошибка... \n попробуйте позже")
            }
        },
    });

    console.log(formik.values);


    return(
        <form onSubmit={formik.handleSubmit} className=" ">
            <div className=" grid grid-cols-1 gap-y-8">
                <InputForm
                    text="Название задачи"
                    placeholderclasses=" text-main_gray mb-1 font-medium text-xl"
                    formik={formik}
                    id="title"
                    placeholder='Введите название задачи'
                    className=" w-full"
                />
                <InputForm
                    text="Описание задачи"
                    placeholderclasses=" text-main_gray mb-1 font-medium text-xl"
                    formik={formik}
                    id="description"
                    placeholder='Расскажите про задачу'
                    className=" w-full"
                />
                <InputForm
                    text="Сложность задачи"
                    placeholderclasses=" text-main_gray mb-1 font-medium text-xl"
                    formik={formik}
                    id="status"
                    placeholder="Введите сложность задачи(Сложная/Нормальная/Лёгкая)"
                    className=" w-full"
                />
                <InputForm
                    text="Срок выполнения задачи"
                    placeholderclasses=" text-main_gray mb-1 font-medium text-xl"
                    formik={formik}
                    id="birth_date"
                    type="date"
                    className=" w-full"
                />
            </div>
            <Button type="submit" className="mt-11 text-center w-full">
                Создать задачу
            </Button>
        </form>
    );
}