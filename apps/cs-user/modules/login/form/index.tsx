'use client';
import Link from 'next/link';
import { Button } from '../../../components/Button';
import { TextField } from '../../../components/Input/text';
import { Checkbox } from '../../../components/Input/checkbox';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const LoginForm: FC = (): ReactElement => {
  //   const router = useRouter();
  const validationSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email harus diisi' })
      .email({ message: 'Email tidak valid' }),
    password: z.string().min(1, { message: 'Password harus diisi' }),
    remember: z.boolean().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { control, formState, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  // const { mutate, isLoading } = useLogin();
  const [getError, setError] = useState<string | undefined>('');

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 3000);
  }, [getError]);

  // const onSubmit = handleSubmit((data) => {
  //     mutate
  // })

  return (
    <form
      // onSubmit={onSubmit}
      className="bg-white items-center justify-center px-8 py-12 shadow-gray-300 shadow-lg lg:w-[512px] w-[400px] h-auto rounded-sm overflow-hidden"
    >
      <div className="space-y-5">
        <h1 className="text-primary-base text-center font-semibold font-sans text-4xl">
          Masuk
        </h1>
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
          status={formState.errors.email ? 'error' : 'none'}
          message={formState.errors.email?.message}
          variant="md"
          required
          rules={{
            required: true,
          }}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          required
          status={formState.errors.password ? 'error' : 'none'}
          message={formState.errors.password?.message}
          rules={{
            required: true,
          }}
          placeholder="Masukkan Password Anda"
          control={control}
          variant="md"
        />
        <Checkbox
          name="remember"
          variant="md"
          control={control}
          label="Ingatkan Saya"
        />
      </div>
      <Button
        type="submit"
        //   loading={isLoading ? "Sedang Masuk..." : undefined}
        className="flex disabled:bg-neutral-200 justify-center w-full p-3 mt-8 rounded-md border bg-primary-400 text-white font-bold"
        disabled={!formState.isValid}
      >
        Masuk
      </Button>
    </form>
  );
};
