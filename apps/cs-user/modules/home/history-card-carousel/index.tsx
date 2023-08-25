import { Card } from '@cs-user/components';
import { FC, ReactElement } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useCardData } from './hooks';
import { IconNext, IconPrev } from '@cs-user/components';
import Image from 'next/image';

export const HistoryCardCarousel: FC = (): ReactElement => {
  const { getCardData } = useCardData();
  const cardProps = {
    mouseTrackingEnabled: true,
    disableDotsControls: true,
    items: getCardData.map((x, i) => (
      <div key={i} className="flex max-w-screen">
        <Card
          hasButton={true}
          
          buttonText="Lihat Detail"
          buttonHref="/dashboard/request?tab=hasil"
          buttonClassName={`flex py-1 justify-center rounded-sm text-white items-end my-2 ${x.bgButton} w-full`}
          className="w-[300px] m-3 min-h-[130px] absolute shadow-md px-4 py-3"
        >
          <div className="flex flex-row w-full h-full py-4 gap-2 justify-center items-center">
          <div className="flex justify-center items-center w-corousel">
                <img src={x.icon} alt="icon" className='flex justify-center items-center' width={20} height={20}/>
                </div>

            <div className="flex-col w-full space-y-1 flex ">
              <p className="text-sm font-semibold pr-8">{x.title}</p>
              <p className="text-neutral-400 font-normal text-xs">{x.desc}</p>
            </div>
          </div>
        </Card>
      </div>
    )),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
        itemsFit: 'contain',
      },
    },
    autoPlay: true,
    autoPlayInterval: 3000,
    animationDuration: 1000,
    Infinity: true,
    renderPrevButton: () => {
      return <div className="absolute -left-3 top-[35%]">{<IconNext />}</div>;
    },
    renderNextButton: () => {
      return <div className="absolute -right-3 top-[35%]">{<IconPrev />}</div>;
    },
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold uppercase p-3">Riwayat Permintaan</h1>
      <AliceCarousel {...cardProps} />
    </div>
  );
};
