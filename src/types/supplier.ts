export interface Supplier {
  id: string;
  name: string; // kişi adı
  address: string; // adres
  company: string; // "Square" (JSON’da suppliers alanı aslında company)
  date: Date; // teslim tarihi
  amount: number; // tutar
  status: string; // Active / Inactive
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateSupplierRequest {
  name: string;
  address: string;
  company: string;
  date: Date;
  amount: number;
  status: string;
}

export interface UpdateSupplierRequest {
  name?: string;
  address?: string;
  company?: string;
  date?: Date;
  amount?: number;
  status?: string;
}
