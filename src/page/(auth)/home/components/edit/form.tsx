import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { InputForm } from "@/common/ui/form";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";
import { useUserStore } from "@/common/store/user-store";
import { userClient } from "@/common/core-axios/user";
import { IUser } from "@/common/types/user.type";
import { useEditHome } from "@/common/store/toggle-store";

const Schema = z.object({
    first_name: z.string().optional(),
    surname: z.string().optional(),
    email: z.string().readonly(),
    phone: z.string().optional(),
    birth_date: z.string().optional(),
    country: z.string().optional(),
});


export function Form() {
    const router = useRouter();

    const user = useUserStore(useShallow(state=>state.user));
    const close = useEditHome(useShallow(state=>state.close));



    const formik = useFormik({
        initialValues: {
            first_name: user?.first_name || "",
            surname: user?.surname || "",
            email: user?.email || "",
            phone_number: user?.phone_number || "",
            birth_date: user?.birth_date || "",
            country: user?.country || "",
            profile_picture: user?.profile_picture || ""
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            try {
                console.log(values);
                const body: IUser = {
                    ...values,
                }

                if(!body.profile_picture) delete body.profile_picture;
                if(!body.birth_date) delete body.birth_date;

                userClient.updateUser(body).then(res=>{
                    close();
                });


            } catch (error) {
                console.error(error);
                alert("Произошла ошибка... \n попробуйте позже")
            }
        },
    });

    console.log(formik.values);


    return(
        <form onSubmit={formik.handleSubmit} className=" mt-12">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-32 mt-12">
                <InputForm
                    text="Имя"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="first_name"
                    placeholder='Ваше имя'
                    className=" w-full"
                    sprite="profile"
                />
                <InputForm
                    text="Фамилия"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="surname"
                    placeholder='Ваша фамилия'
                    className=" w-full"
                    sprite="profile"
                />
                <InputForm
                    text="Email"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="email"
                    readOnly
                    className=" w-full"
                    sprite="profile"
                />
                <InputForm
                    text="Номер телефона"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="phone_number"
                    className=" w-full"
                    sprite="phone"
                />
                <InputForm
                    text="Дата рождения"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="birth_date"
                    type="date"
                    className=" w-full"
                    // sprite="calendar"
                />
                <InputForm
                    text="Страна"
                    placeholderclasses=" text-main_gray mb-1 font-bold text-xl"
                    formik={formik}
                    id="country"
                    className=" w-full"
                    // sprite="calendar"
                />
                

            </div>
            <Button type="submit" className="mt-11 w-1/2">
                Сохранить
            </Button>
        </form>
    );
}