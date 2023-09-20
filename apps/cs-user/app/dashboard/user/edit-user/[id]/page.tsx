"use client";
// import {  } from "../../../../../modules";
import { EditUserDataModule } from "../../../../../modules/user/edit-user";
import { NextPage } from "next";

interface props {
  params: {
    id: string;
  };
}

const EditUserDataPage: NextPage<props> = ({ params }: { params: { id: string } }) => {
  return <EditUserDataModule params={params} />;
};

export default EditUserDataPage;
