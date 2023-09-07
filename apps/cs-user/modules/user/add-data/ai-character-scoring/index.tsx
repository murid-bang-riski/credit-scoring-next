import { FC, ReactElement, useState } from "react";
import {
  FileUploadField,
  Button,
  Accordion,
  Card,
  IconInfo,
  IconClose,
  DraggableFileUpload,
} from "@cs-user/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { z } from "zod";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

export const CharacterScoringSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];
  const dataValidationSchema = z.object({
    all_files_character: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_ktp: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_nomor_induk_berusaha: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_izin_usaha_perdagangan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_nomor_akta_notaris: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_keterangan_domisili_usaha: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_nomor_pokok_wajib_pajak: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_tanda_daftar_perusahaan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_selfie: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_laporan_keuangan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_credit_applicant: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_kepemilikan_kendaraan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_kepemilikan_rumah: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_nota_saham: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
  });

  // const { mutate }

  type DataValidationSchema = z.infer<typeof dataValidationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<DataValidationSchema>({
    resolver: zodResolver(dataValidationSchema),
    mode: "all",
    defaultValues: {
      all_files_character: undefined,
      image_ktp: undefined,
      image_selfie: undefined,
      image_credit_applicant: undefined,
      image_nota_saham: undefined,
      image_surat_izin_usaha_perdagangan: undefined,
      image_surat_kepemilikan_kendaraan: undefined,
      image_surat_kepemilikan_rumah: undefined,
      image_surat_keterangan_domisili_usaha: undefined,
      image_surat_laporan_keuangan: undefined,
      image_surat_nomor_akta_notaris: undefined,
      image_surat_nomor_induk_berusaha: undefined,
      image_surat_nomor_pokok_wajib_pajak: undefined,
      image_surat_tanda_daftar_perusahaan: undefined,
    },
  });

  // const { setDataCategory } = useCategoryStatus();
  // const { setDataIdentity, getDataIdentity } = useIdentityStatus();

  const onSubmit = handleSubmit((data) => {
    try {
      // mutate(
      //   {
      //     ...data,
      //     ktp: data.image_ktp[0] as File,
      //     selfie: data.image_selfie[0] as File,
      //     surat_nomor_induk_berusaha: data
      //       .image_surat_nomor_induk_berusaha[0] as File,
      //     surat_izin_usaha_perdagangan: data
      //       .image_surat_izin_usaha_perdagangan[0] as File,
      //     surat_nomor_akta_notaris: data
      //       .image_surat_nomor_akta_notaris[0] as File,
      //     surat_keterangan_domisili_usaha: data
      //       .image_surat_keterangan_domisili_usaha[0] as File,
      //     surat_tanda_daftar_perusahaan: data
      //       .image_surat_tanda_daftar_perusahaan[0] as File,
      //     npwp: data.image_surat_nomor_pokok_wajib_pajak[0] as File,
      //     surat_laporan_keuangan: data.image_surat_laporan_keuangan[0] as File,
      //     form_credit_applicant: data.image_credit_applicant[0] as File,
      //     surat_kepemilikan_kendaraan: data
      //       .image_surat_kepemilikan_kendaraan[0] as File,
      //     nota_kepemilikan_rumah: data.image_surat_kepemilikan_rumah[0] as File,
      //     nota_kepemilikan_saham: data.image_nota_saham[0] as File,
      //   },
      //   {
      //     onSuccess: () => {
      //       console.log('success');
      //       // setDataCharacter(true);
      //     },
      //   }
      // );
    } catch (err) {
      //   setDataCharacter(false);
      console.log("error");
      throw err;
    }
  });

  const upload: Array<{
    name: string;
    control: Control;
    required: boolean;
    accepted: string;
    label: string;
    notif: string;
    message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    status: "error" | "none" | "success" | "warning" | undefined;
  }> = [
    {
      name: "image_ktp",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Kartu Tanda Penduduk (KTP)",
      message: errors.image_ktp?.message,
      status: errors.image_ktp ? "error" : "none",
      notif: "*Pastikan foto KTP dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_induk_berusaha",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Induk Berusaha",
      message: errors.image_surat_nomor_induk_berusaha?.message,
      status: errors.image_surat_nomor_induk_berusaha ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Induk Berusha dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_izin_usaha_perdagangan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Izin Usaha Perdagangan",
      message: errors.image_surat_izin_usaha_perdagangan?.message,
      status: errors.image_surat_izin_usaha_perdagangan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Izin Usaha Perdagangan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_akta_notaris",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Akta Notaris",
      message: errors.image_surat_nomor_akta_notaris?.message,
      status: errors.image_surat_nomor_akta_notaris ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Akta Notaris dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_keterangan_domisili_usaha",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Keterangan Domisili Usaha",
      message: errors.image_surat_keterangan_domisili_usaha?.message,
      status: errors.image_surat_keterangan_domisili_usaha ? "error" : "none",
      notif:
        "*Pastikan foto Surat Keterangan Domisili Usaha dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_pokok_wajib_pajak",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Pokok Wajib Pajak",
      message: errors.image_surat_nomor_pokok_wajib_pajak?.message,
      status: errors.image_surat_nomor_pokok_wajib_pajak ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Pokok Wajib Pajak dapat terlihat dengan jelas dan pencahayaan yang baiks",
    },
    {
      name: "image_surat_tanda_daftar_perusahaan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Tanda Daftar Perusahaan",
      message: errors.image_surat_tanda_daftar_perusahaan?.message,
      status: errors.image_surat_tanda_daftar_perusahaan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Tanda Daftar Perusahaan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_selfie",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Foto Selfi Diri",
      message: errors.image_selfie?.message,
      status: errors.image_selfie ? "error" : "none",
      notif: "*Pastikan Foto Selfie Diri dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_laporan_keuangan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Laporan Keuangan",
      message: errors.image_surat_laporan_keuangan?.message,
      status: errors.image_surat_laporan_keuangan ? "error" : "none",
      notif: "*Pastikan Foto Selfie Diri dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_credit_applicant",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Form Credit Applicant",
      message: errors.image_credit_applicant?.message,
      status: errors.image_credit_applicant ? "error" : "none",
      notif:
        "*Pastikan foto Form Credit Applicant dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_kepemilikan_kendaraan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Kepemilikan Kendaraan",
      message: errors.image_surat_kepemilikan_kendaraan?.message,
      status: errors.image_surat_kepemilikan_kendaraan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Kepemilikan Kendaraan dapat terlihat dengan jelas dan pencahayaan yang baiks",
    },
    {
      name: "image_surat_kepemilikan_rumah",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Sertifikat Kepemilikan Rumah",
      message: errors.image_surat_kepemilikan_rumah?.message,
      status: errors.image_surat_kepemilikan_rumah ? "error" : "none",
      notif:
        "*Pastikan foto Sertifikat Kepemilikan Rumah dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_nota_saham",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Nota Kepemilikan Saham/Dana Tabungan",
      message: errors.image_nota_saham?.message,
      status: errors.image_nota_saham ? "error" : "none",
      notif:
        "*Pastikan foto Nota Kepemilikan Saham/Dana Tabungan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
  ];
  return (
    <section>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="absolute  top-[30%] left-[30%]"
      >
        <Dialog.Panel>
          <Card className="w-full  h-fit shadow-2xl py-4 px-6 rounded-sm">
            <div className="w-full flex flex-col gap gap-y-2">
              <button
                onClick={() => setIsOpen(false)}
                className="flex w-full justify-end hover:cursor-pointer"
              >
                <IconClose />
              </button>
              <div className="flex">
                <div className="w-[60%]">
                  <h1 className="font-bold">Tata Cara Mengambil Foto</h1>
                  <p>1. Pastikan Foto Pas di Layar</p>
                  <p>2. Pastikan Foto yang diambil jelas dan tidak terlihat buram</p>
                  <p>3. Pastikan teks terbaca</p>
                </div>
                <div>
                  <Image
                    src="/./exampe.png"
                    alt="sample"
                    width={0}
                    height={0}
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Dialog.Panel>
      </Dialog>
      <Accordion
        title="AI Character Scoring"
        // idAccordion={getDataIdentity ? '' : 'identity-status-state'}
        // disabled={getDataIdentity ? true : false}
        idAccordion="identity-status-state"
        disabled={false}
      >
        <form onSubmit={onSubmit}>
          <DraggableFileUpload
            maxFileSize={2000}
            allowedFileTypes={[".xls", ".xlsx"]}
            multiple={false}
          />
          {upload.map((x, i) => (
            <div className="py-2" key={i}>
              <div className="flex gap-4">
                <div className="w-[95%] ">
                  <FileUploadField {...x} message={x.message as string} variant={"md"} />
                  <div className="flex w-full justify-between text-black">
                    <p className="text-xs ">{x.notif}</p>
                    <div className="flex gap-2">
                      <IconInfo />
                      <p className="text-xs font-bold ">Max 3.MB</p>
                    </div>
                  </div>
                </div>
                <div onClick={() => setIsOpen(true)} className="flex group flex-col gap-2 relative">
                  <button className="flex justify-end items-center rounded-full text-center text-white font-bold p-4 text-[20px] w-10 h-10 bg-gray-200 mt-8 group-hover:bg-primary-300">
                    ?
                  </button>
                  <p className="text-[10px] p-1 font-bold bg-white group-hover:bg-primary-300 text-white rounded-md w-[80px] text-center justify-center absolute z-10 bottom-0">
                    Lihat Contoh
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex w-full my-8 justify-end">
            <Button
              disabled={!isValid}
              className="my-4 w-[200px] rounded-[8px] disabled:bg-gray-300 disabled:text-gray-100 bg-primary-300 text-white font-bold p-3 text-1xl"
              type={"submit"}
            >
              Simpan
            </Button>
          </div>
        </form>
      </Accordion>
    </section>
  );
};
