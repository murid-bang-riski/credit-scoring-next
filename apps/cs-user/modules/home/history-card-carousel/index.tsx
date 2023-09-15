import { Card } from "@cs-user/components";
import { ReactElement } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconNext, IconPrev } from "@cs-user/components";
import Image from "next/image";
import { TFeatureHistoryItem } from "@cs-user/types";
import { RiH1 } from "react-icons/ri";
import { useCardData } from "./hooks";

export const HistoryCardCarousel = (data: any, isLoading: boolean): ReactElement => {
  const { getCardData } = useCardData();

  const getIconAndBgButton = (name: string) => {
    const matchingCard = getCardData.find((card) => card.title === name);
    if (matchingCard) {
      return {
        icon: matchingCard.icon,
        bgButton: matchingCard.bgButton,
      };
    }
    return {
      icon: "",
      bgButton: "",
    };
  };

  const cardProps = {
    mouseTrackingEnabled: true,
    disableDotsControls: true,
    // item: <h1>test</h1>,
    items: data?.data?.map((x: any, i: number) => {
      const { icon, bgButton } = getIconAndBgButton(x.name); // Get icon and bgButton dynamically
      return (
        <div key={i} className="flex max-w-screen">
          <Card
            hasButton={true}
            buttonText="Lihat Detail"
            buttonHref="/dashboard/request?tab=hasil"
            buttonClassName={`flex py-1 justify-center rounded-sm text-white items-end my-2 ${bgButton} w-full`}
            className="w-[300px] m-3 min-h-[130px] absolute shadow-md px-4 py-3"
          >
            <div className="flex flex-row w-full h-full py-4 gap-2 justify-center items-center">
              <div className="flex justify-center items-center w-corousel">
                <Image
                  src={icon}
                  alt="icon"
                  className="flex justify-center items-center"
                  width={20}
                  height={20}
                />
              </div>

              <div className="flex-col w-full space-y-1 flex">
                <p className="text-sm font-semibold pr-8">{x.name}</p>
                <p className="text-neutral-400 font-normal text-xs">{`${x.total_data} permintaan`}</p>
              </div>
            </div>
          </Card>
        </div>
      );
    }),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
        itemsFit: "contain",
      },
    },
    autoPlay: true,
    autoPlayInterval: 3000,
    animationDuration: 1000,
    Infinity: true,
    renderPrevButton: () => {
      return (
        <div className="bg-white absolute -left-8 top-[35%] p-2 rounded-full shadow-md hover:bg-slate-100">
          {<IconNext />}
        </div>
      );
    },
    renderNextButton: () => {
      return (
        <div className=" bg-white absolute -right-8 top-[35%] p-2 rounded-full shadow-md hover:bg-slate-100">
          {<IconPrev />}
        </div>
      );
    },
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold uppercase p-3">Riwayat Permintaan</h1>
      <div className="">
        <AliceCarousel {...cardProps} />
      </div>
    </div>
  );
};
