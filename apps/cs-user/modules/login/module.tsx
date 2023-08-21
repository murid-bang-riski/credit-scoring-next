import React from 'react';
import { LoginForm } from './form';
import Image from 'next/image';

export const LoginModule = () => {
  return (
    <section className="flex lg:w-screen z-0 lg:h-screen  overflow-hidden bg-white">
      <div className="lg:p-8 lg:w-full w-full overflow-hidden">
        <Image
          src="./assets/auth/logo.svg"
          alt="logo"
          width={160}
          height={160}
        />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center z-50">
        <LoginForm />
        <p className="text-primary-500 pt-8 font-bold">PT Menara Indonesia</p>
      </div>

      <Image
        src={'./assets/auth/asset3.svg'}
        alt="variasi"
        width={400}
        height={400}
        className="items-end absolute bottom-0 lg:mx-40 "
      />

      <div className="flex w-screen justify-end items-start overflow-hidden">
        <Image
          src={'/assets/auth/asset2.svg'}
          alt="variasi"
          width={250}
          height={250}
          className="absolute  mx-20"
        />
        <Image
          src={'/assets/auth/asset1.svg'}
          alt="variasi"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};
