"use client";
import { NextPage } from "next";
import { FC, ReactElement, Fragment, useState } from "react";
import { Card } from "@cs-user/components";
import Image from "next/image";

export const RequestAI: FC = () => {
  const DataCard = [
    {
      id: 1,
      icon: "/assets/dashboard/feature-icon/ai-automation.svg",
      desc: 500,
      title: "AI Automation",
      bgButton: "bg-purple-500",
    },
    {
      id: 2,
      icon: "/assets/dashboard/feature-icon/ai-document-verification.svg",
      desc: 500,
      title: "AI Document Verification",
      bgButton: "bg-primary-500",
    },
    {
      id: 3,
      icon: "/assets/dashboard/feature-icon/ai-location-movement.svg",
      desc: 500,
      title: "AI Location and Movement",
      bgButton: "bg-secondary-500",
    },
    {
      id: 4,
      icon: "/assets/dashboard/feature-icon/ai-capacity-earning-power.svg",
      desc: 500,
      title: "AI Capacity and Earning Power",
      bgButton: "bg-warning-300",
    },
    {
      id: 5,
      icon: "/assets/dashboard/feature-icon/ai-capital-strength-analysis.svg",
      desc: 500,
      title: "AI Capital Strength and Analysis",
      bgButton: "bg-primary-500",
    },
    {
      id: 6,
      icon: "/assets/dashboard/feature-icon/ai-collateral-guarantee.svg",
      desc: 500,
      title: "AI Collateral and Guarantee",
      bgButton: "bg-secondary-500",
    },
    {
      id: 7,
      icon: "/assets/dashboard/feature-icon/ai-condition-analysis.svg",
      desc: 500,
      title: "AI Condition Analysis",
      bgButton: "bg-warning-300",
    },
    {
      id: 8,
      icon: "/assets/dashboard/feature-icon/ai-digital-footprint.svg",
      desc: 500,
      title: "AI Digital Footprint",
      bgButton: "bg-purple-500",
    },
    {
      id: 9,
      icon: "/assets/dashboard/feature-icon/ai-character-analysis.svg",
      desc: 500,
      title: "AI Character Analysis",
      bgButton: "bg-primary-500",
    },
    {
      id: 10,
      icon: "/assets/dashboard/feature-icon/ai-identity-scoring.svg",
      desc: 500,
      title: "AI Identity Scoring",
      bgButton: "bg-warning-300",
    },
    {
      id: 11,
      icon: "/assets/dashboard/feature-icon/ai-character-scoring.svg",
      desc: 500,
      title: "AI Character Scoring",
      bgButton: "bg-purple-500",
    },
    {
      id: 12,
      icon: "/assets/dashboard/feature-icon/ai-capability-scoring.svg",
      desc: 500,
      title: "AI Capability Scoring",
      bgButton: "bg-primary-500",
    },
    {
      id: 13,
      icon: "/assets/dashboard/feature-icon/ai-credit-scoring.svg",
      desc: 500,
      title: "AI Credit Scoring",
      bgButton: "bg-secondary-500",
    },
    {
      id: 14,
      icon: "/assets/dashboard/feature-icon/ai-constraint-analysis.svg",
      desc: 500,
      title: "AI Constraint Analysis",
      bgButton: "bg-purple-500",
    },
    {
      id: 15,
      icon: "/assets/dashboard/feature-icon/ai-legal-permit-analysis.svg",
      desc: 500,
      title: "AI Legal and Permit Analysis",
      bgButton: "bg-secondary-500",
    },
    {
      id: 16,
      icon: "/assets/dashboard/feature-icon/ai-credit-need-purpose.svg",
      desc: 500,
      title: "AI Credit Need and Purpose",
      bgButton: "bg-warning-300",
    },
  ];

  return (
    <div className="mx-3">
      <div className=" grid lg:grid-cols-4 gap-4">
        {DataCard.map((x, i) => (
          <div key={i} className="flex max-w-screen ">
            <Card
              hasButton={false}
              hasNumber={true}
              numberCard={x.id}
              className="w-[265px] pl-5 min-h-[103px] justify-center items-center"
            >
              <div className="flex flex-row w-full h-full items-center justify-center gap-2">
                <div className="flex justify-center items-center">
                  <Image
                    src={x.icon}
                    alt="icon"
                    className="flex justify-center items-center"
                    width={65}
                    height={65}
                  />
                </div>
                <div className="flex-col w-full ">
                  <p className="text-sm font-semibold break-words pr-12">{x.title}</p>
                  <p className="text-neutral-400 font-normal text-xs">Data masuk ({x.desc})</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
