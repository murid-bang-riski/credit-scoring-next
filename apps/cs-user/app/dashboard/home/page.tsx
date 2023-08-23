'use client';
import { HomeModule } from '../../../modules';
import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';

const LoginPages: NextPage = () => {
  return (
    <RecoilRoot>
      <HomeModule />
    </RecoilRoot>
  );
};

export default LoginPages;
