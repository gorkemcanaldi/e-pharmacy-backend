export interface Customer {
  image: string;
  name: string;
  email: string;
  spent: string;
  phone: number;
  address: string;
  register_date: Date;
}

export interface CustomerServiceParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: {
    image?: string;
    name?: string;
    address?: string;
    spent?: string | null;
    email?: string;
    phone?: number | null;
    register_date?: Date;
  };
}
