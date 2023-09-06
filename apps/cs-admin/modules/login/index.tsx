import Image from "next/image";
import Logo from "../../public/logo.svg";
import { asset1, asset2, asset3 } from "../../public/login";
import { FormLogin } from "./form";

const LoginModule = () => {
  return (
    <section className="flex flex-col lg:w-screen z-0 lg:h-screen bg-neutral-100 overflow-hidden">
      <Image
        src={asset1}
        alt="asset1"
        className="absolute right-[100px]  hidden lg:block"
        loading="lazy"
      />
      <Image src={asset2} alt="asset2" className="absolute right-0  hidden lg:block" priority />
      <div className="lg:p-8 lg:w-full w-full overflow-hidden">
        <Image src={Logo} alt="logo" width={100} priority />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center z-50">
        <FormLogin />
        <p className="text-primary-600 py-4 font-semibold">PT Menara Indonesia</p>
      </div>
      <Image
        src={asset3}
        alt="asset3"
        className="absolute bottom-0 left-48  hidden lg:block"
        loading="lazy"
      />
    </section>
  );
};

export default LoginModule;
