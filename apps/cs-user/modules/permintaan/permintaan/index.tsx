'use client';
import { NextPage } from 'next';
import { FC, ReactElement, Fragment, useState } from 'react';
import { Card } from '@cs-user/components';
import Image from 'next/image';

export const RequestAI: FC = () => {
  const DataCard = [
    {
      id: 1,
      icon: '/assets/dashboard/card1.svg',
      title: 'AI Automation',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 2,
      icon: '/assets/dashboard/card2.svg',
      title: 'AI Document Verification',
      desc: 500,
      bgButton: 'bg-primary-500',
    },
    {
      id: 3,
      icon: '/assets/dashboard/card3.svg',
      title: 'AI Location Movement',
      desc: 500,
      bgButton: 'bg-secondary-500',
    },
    {
      id: 4,
      icon: '/assets/dashboard/card4.svg',
      title: 'AI Capacity & Earning Power',
      desc: 500,
      bgButton: 'bg-warning-300',
    },
    {
      id: 5,
      icon: '/assets/dashboard/card5.svg',
      title: 'AI Capacital Strength Analisys',
      desc: 500,
      bgButton: 'bg-primary-500',
    },
    {
      id: 6,
      icon: '/assets/dashboard/card6.svg',
      title: 'AI Collateral & Guarantee',
      desc: 500,
      bgButton: 'bg-secondary-500',
    },
    {
      id: 7,
      icon: '/assets/dashboard/card7.svg',
      title: 'AI Condition Analysis',
      desc: 500,
      bgButton: 'bg-warning-300',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
    },
    {
      id: 8,
      icon: '/assets/dashboard/card8.svg',
      title: 'AI Digital FootPrint',
      desc: 500,
      bgButton: 'bg-purple-500',
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
                  <p className="text-sm font-semibold break-words pr-12">
                    {x.title}
                  </p>
                  <p className="text-neutral-400 font-normal text-xs">
                    Data masuk ({x.desc})
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
