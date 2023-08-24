'use client';
import { HomeModule } from '../../../modules';
import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';

const HomePages: NextPage = () => {
  return (
    <RecoilRoot>
      <HomeModule />
    </RecoilRoot>
  );
};

export default HomePages;
