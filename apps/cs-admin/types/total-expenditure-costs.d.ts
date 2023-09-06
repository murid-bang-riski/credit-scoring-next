export type TTotalExpenditureCostsResponse = {
  getTotalExpenditureCostsData: TTOtalExpenditureCostsItem[];
};

export type TTOtalExpenditureCostsItem = {
  id: number;
  tanggal_pembelian: string;
  nama_cabang: string;
  ai_identity_scoring: number;
  ai_character_scoring: number;
  ai_capability_scoring: number;
  ai_credit_scoring: number;
};
