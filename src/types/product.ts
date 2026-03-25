export interface Product {
  id: string;
  photo?: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductServiceParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: {
    name?: string;
    suppliers?: string;
    stock?: number | null;
    category?: string;
    price?: number | null;
  };
}

export interface CreateProductRequest {
  photo?: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
}

export interface UpdateProductRequest {
  photo?: string;
  name?: string;
  suppliers?: string;
  stock?: number;
  price?: number;
  category?: string;
}
