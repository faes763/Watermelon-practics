import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { InputForm } from "@/common/ui/form";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { TFormState } from "..";
import { authClient } from "@/common/core-axios/auth/client";
import { useRouter } from "next/navigation";

const Schema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(6),
});


export function Form({state,setState}:{state:TFormState,setState: (state:TFormState) => void}) {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            try {
                console.log(values);
                authClient[state==="login" ? "login" : "register"](values).then(res=>{
                    if(state === "login") router.push('/profile');
                    else setState("login");
                });


            } catch (error) {
                console.error(error);
                alert("Произошла ошибка... \n попробуйте позже")
            }
        },
    });

    return(
        <form onSubmit={formik.handleSubmit} className=" mt-12">
     
            <div className=" space-y-11 mt-12">
                <InputForm
                    isRequire
                    text="Email"
                    placeholderclasses=" font-bold text-2xl"
                    formik={formik}
                    id="email"
                    type="email"
                    placeholder='example@gmail.com'
                    className=" w-full"
                />
                <InputForm
                    isRequire
                    text="Пароль"
                    placeholderclasses=" font-bold text-2xl"
                    formik={formik}
                    id="password"
                    type="password"
                    placeholder='12345678'
                    className=" w-full"
                />
            </div>
            <Button className="mt-11  w-full">
                {state === "login" ? "Войти" : "Создать аккаунт"}
            </Button>
        </form>
    );
}