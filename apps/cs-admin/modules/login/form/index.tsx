"use client";
import { Button, Checkbox, TextField } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

export const FormLogin: FC = (): ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [getError, setError] = useState<string | undefined | null>(undefined);
  type ValidationSchema = z.infer<typeof validationSchema>;

  const validationSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email harus diisi" })
      .email({ message: "Email tidak valid" }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean().optional(),
  });

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const callbackUrl = searchParams.get("callbackUrl") || "";

  const onSubmit = async (data: any) => {
    try {
      const res = await signIn("login", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (!res?.error) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Login Berhasil",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/admin");
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: res.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: { error },
        showConfirmButton: false,
        timer: 1500,
      });
      setError(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Use handleSubmit here
      className="bg-white items-center justify-center px-8 py-12 shadow-gray-300 shadow-lg lg:w-[512px] w-[400px] h-auto rounded-sm overflow-hidden"
    >
      <div className="space-y-5">
        <h1 className="text-primary-base text-center font-semibold font-sans text-4xl">Masuk</h1>
        <p className="lg:text-base text-sm text-gray-400 text-center">
          Silahkan masuk dengan email dan kata sandi anda
        </p>
      </div>
      <div className="flex bg-error-100 rounded-md text-error-300 w-full justify-center my-2">
        {getError}
      </div>
      <div className="lg:py-6 py-0 space-y-2">
        <TextField
          type="email"
          label="Email"
          name="email"
          control={control}
          placeholder="msdqn@psu.org"
          status={errors.email ? "error" : "none"}
          message={errors.email?.message}
          variant="md"
          rules={
            {
              // No need to specify 'required: true' here
            }
          }
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          status={errors.password ? "error" : "none"}
          message={errors.password?.message}
          placeholder="Masukkan Password Anda"
          control={control}
          variant="md"
          rules={
            {
              // No need to specify 'required: true' here
            }
          }
        />
        <Checkbox name="remember" variant="md" control={control} label="Ingatkan Saya" />
      </div>
      <Button
        type="submit"
        className="flex disabled:bg-neutral-200 justify-center w-full p-3 mt-8 rounded-md border bg-primary-400 text-white font-bold"
        disabled={!isValid}
      >
        Masuk
      </Button>
    </form>
  );
};
