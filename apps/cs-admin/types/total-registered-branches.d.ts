export type TTotalRegisteredBranchesResponse = {getTotalRegisteredBranchesData: TTotalRegisteredBranchesItem[]};

export type TTotalRegisteredBranchesItem = {
  id: number;
  kode_cabang: number;
  nama_cabang: string;
  alamat_cabang: string;
  no_telpon: string;
};
