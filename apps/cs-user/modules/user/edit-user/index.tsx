"use client";

import Link from "next/link";
import { CapabilityScoringSection } from "../ai-capability-scoring";
import { CharacterScoringSection } from "../ai-character-scoring";
import { IdentityScoringSection } from "../ai-identity-scoring";
import { IconBack, IconWarning } from "components/icons";

export const EditUserDataModule = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <div className="my-8 space-y-4 w-full h-full">
      {/* <div className="flex flex-row w-full h-fit py-3 bg-warning-100 rounded-md px-6 text-warning-500 font-bold text-xs items-center gap gap-x-1">
        <IconWarning size={20} />
        <span className="ml-3">
          Harap mengisi semua bagian untuk melanjutkan ke tahapan selanjutnya{" "}
        </span>
      </div> */}
      {/* content */}
      <div className="bg-white w-full h-full px-8 flex flex-col">
        <Link href={"/dashboard/user"}>
          <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
            <div>
              <IconBack />
            </div>
            <div className="hover:opacity-[50%]">Kembali</div>
          </div>
        </Link>
        <div className="w-full h-fit flex justify-center items-center my-14 font-bold text-2xl">
          AI Automation
        </div>
        <div className="w-full h-fit">
          <IdentityScoringSection />
          <CharacterScoringSection />
          <CapabilityScoringSection />
        </div>
      </div>
    </div>
  );
};
