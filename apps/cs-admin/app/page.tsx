"use client";

import LoginModule from "@/modules/login";
import { FC, ReactElement } from "react";

const LoginPage: FC = (): ReactElement => {
  return (
    <div className="font-sans">
      <LoginModule />
    </div>
  );
};

export default LoginPage;
