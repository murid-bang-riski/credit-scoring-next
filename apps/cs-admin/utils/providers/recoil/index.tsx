"use client"
import React from "react";
import { RecoilRoot } from "recoil";

const RecoilProvider = ({ children }: React.PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
