export type TKantorResponse = { getKantorData: TKantorItem[] };

export type TKantorItem = {
  id: number;
  kode_cabang: number;
  nama_cabang: string;
  alamat_cabang: string;
  no_telpon: string;
};
