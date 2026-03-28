export interface Supplier {
  name: string;
  address: string;
  suppliers: string;
  date: Date;
  amount: number;
  status: SuppliersStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SupplierServicesParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: {
    name?: string;
    address?: string;
    suppliers?: string;
    date?: Date;
    amount?: number | null;
    status?: SuppliersStatus;
  };
}

export enum SuppliersStatus {
  Active = "Active",
  Deactive = "Deactive",
}

export interface CreateSupplierRequest {
  name: string;
  address: string;
  suppliers: string;
  date: Date;
  amount: number;
  status: SuppliersStatus;
}

export interface UpdateSupplierRequest {
  name?: string;
  address?: string;
  suppliers?: string;
  date?: Date;
  amount?: number;
  status?: SuppliersStatus;
}
