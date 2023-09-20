"use client";
// import {  } from "../../../../../modules";
import { DetailUserDataModule } from "../../../../../modules/user/detail-user";
import { NextPage } from "next";

interface props {
  params: {
    id: string;
  };
}

const DetailUserDataPage: NextPage<props> = ({ params }: { params: { id: string } }) => {
  return <DetailUserDataModule params={params} />;
};

export default DetailUserDataPage;
