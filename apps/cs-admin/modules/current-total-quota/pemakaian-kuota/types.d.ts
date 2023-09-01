export type TQuotaResponse = { getQuotaData: TQuotaItem[] };

export interface TQuotaItem {
  id: number;
  tanggal_pembelian: string;
  nama_cabang: string;
  ai_identity_scoring: number;
  ai_character_scoring: number;
  ai_capability_scoring: number;
  ai_credit_scoring: number;
}
