import { Button, IconCheck, IconClose, IconWarning } from "@components";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, ReactElement } from "react";

interface IModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const Modal: FC<IModalProps> = ({ isOpen, toggleModal }): ReactElement => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="space-y-[9px] w-full max-w-[484px] transform overflow-hidden rounded-[4px] bg-white py-7 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="pb-5 border-b-[1px] border-neutral-400 font-bold text-lg flex flex-row items-center justify-between px-9">
                  <span>PT Menara Indonesia</span>
                  <div onClick={toggleModal} className="hover:cursor-pointer">
                    <IconClose />
                  </div>
                </Dialog.Title>
                <div className="px-9">
                  <div className="flex flex-row justify-between py-4">
                    <div className="w-full flex flex-col space-y-2">
                      <span className=" text-xs text-neutral-500 font-semibold">
                        Tanggal Request:
                      </span>
                      <span className="text-xs font-semibold">02 Agustus 2022, 09:23:30</span>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      <span className="text-xs text-neutral-500 font-semibold">
                        Kode Perusahaan:
                      </span>
                      <span className="text-xs font-semibold">44679</span>
                    </div>
                  </div>
                  <div className="flex flex-col py-7">
                    <span className="font-bold text-neutral-800 text-sm">Detail Informasi</span>
                    <div className="pt-3 flex flex-col w-full text-xs font-semibold">
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2 rounded-tl-lg px-4 py-2 border-neutral-200 border-[1px]">
                          No. Permintaan :
                        </div>
                        <div className="w-full rounded-tr-lg px-4 py-2 border-[1px] border-neutral-200">
                          0007821
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2  px-4 py-2 border-neutral-200 border-[1px]">
                          Nama Cabang :
                        </div>
                        <div className="w-full  px-4 py-2 border-[1px] border-neutral-200">
                          M-Knows Consulting Cirendeu
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2  px-4 py-2 border-neutral-200 border-[1px]">
                          Nama Departemen :
                        </div>
                        <div className="w-full  px-4 py-2 border-[1px] border-neutral-200">
                          Pengelolaan Moneter
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2  px-4 py-2 border-neutral-200 border-[1px]">
                          Jenis Produk :
                        </div>
                        <div className="w-full  px-4 py-2 border-[1px] border-neutral-200">
                          AI Identity Scoring
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2  px-4 py-2 border-neutral-200 border-[1px]">
                          Total Kuota :
                        </div>
                        <div className="w-full  px-4 py-2 border-[1px] border-neutral-200">
                          1000
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-[60%] bg-add2 rounded-bl-lg px-4 py-2 border-neutral-200 border-[1px]">
                          Status Pembayaran :
                        </div>
                        <div className="w-full flex flex-row gap-x-1 items-center rounded-br-lg px-4 py-2 border-[1px] border-neutral-200">
                          <IconCheck />
                          <span>Selesai</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 flex text-warning-500 font-semibold flex-row w-full rounded-md bg-warning-100 gap-x-2 p-2">
                      <div className="flex items-center">
                        <IconWarning />
                      </div>
                      <span className="text-xs">
                        Harap membaca detail informasi dengan teliti dan tekan Accept untuk
                        menyetujui permintaan kuota
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-x-3 pt-5 px-9 border-t-[1px] border-neutral-400">
                  <Button
                    type="submit"
                    onClick={toggleModal}
                    className="text-primary-400 border-primary-400 border-2 rounded-md py-[7px] px-8 font-semibold text-sm"
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    onClick={toggleModal}
                    className="text-white bg-primary-400 rounded-md py-[7px] px-8 font-semibold text-sm"
                  >
                    Accept
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
