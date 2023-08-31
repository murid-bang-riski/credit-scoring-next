'use client';
import { ModuleRequest } from 'modules/permintaan';
import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';

const RequestPage: NextPage = () => {
  return (
    <RecoilRoot>
      <ModuleRequest />
    </RecoilRoot>
  );
};

export default RequestPage;
