import { Card } from "@cs-user/components";
import { ReactElement, useState, useRef, useEffect } from "react";
import { IconNext, IconPrev } from "@cs-user/components";
import Image from "next/image";
import { useCardData } from "./hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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

  const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
    const [wrapper, setWrapper] = useState<T | null>(null);
    const ref = useRef<T>(null);

    useEffect(() => {
      if (ref.current) {
        setWrapper(ref.current);
      }
    }, []);

    return [wrapper, ref];
  };
  const [nextEl, nextElRef] = useSwiperRef<HTMLDivElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLDivElement>();

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold uppercase p-3">Riwayat Permintaan</h1>
      <div className="flex justify-items-center align-middle items-center">
        <div
          className="bg-white p-2 rounded-full h-fit shadow-md hover:bg-slate-100 cursor-pointer"
          ref={prevElRef}
        >
          {<IconPrev />}
        </div>
        <Swiper
          navigation={{
            prevEl,
            nextEl,
          }}
          modules={[Navigation]}
          slidesPerView={4}
          // spaceBetween={10}
          // freeMode={true}
        >
          {data?.data?.map((x: any, i: number) => {
            const { icon, bgButton } = getIconAndBgButton(x.name);
            return (
              <SwiperSlide key={i} className="flex">
                <Card
                  hasButton={true}
                  buttonText="Lihat Detail"
                  buttonHref="/dashboard/request?tab=hasil"
                  buttonClassName={`flex py-1 justify-center rounded-sm text-white items-end my-2 ${bgButton} w-full`}
                  bodyClassName="flex flex-col justify-center items-center w-full h-full"
                  className="w-[300px] m-3 min-h-[130px] shadow-md px-4 py-3"
                >
                  <div className="flex flex-row w-full h-full py-4 gap-4 justify-center items-center">
                    <div className="flex justify-center items-center">
                      <Image
                        src={icon}
                        alt="icon"
                        style={{ width: "80px", height: "80px" }}
                        // className="flex justify-center items-center"
                        width={0}
                        height={0}
                      />
                    </div>

                    <div className="flex-col w-full space-y-1 flex">
                      <p className="text-md font-semibold pr-8">{x.name}</p>
                      <p className="text-neutral-400 font-normal text-sm">{`${x.total_data} permintaan`}</p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className=" bg-white h-fit p-2 rounded-full shadow-md hover:bg-slate-100 cursor-pointer"
          ref={nextElRef}
        >
          {<IconNext />}
        </div>
        {/* <AliceCarousel {...cardProps} /> */}
      </div>
    </div>
  );
};
