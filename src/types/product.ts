export interface Product {
  id: string;
  photo?: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: ProductCategory;
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
    category?: ProductCategory;
    price?: number | null;
  };
}

export enum ProductCategory {
  Medicine = "Medicine",
  Heart = "Heart",
  Head = "Head",
  Hand = "Hand",
  Leg = "Leg",
  DentalCare = "Dental Care",
  SkinCare = "Skin Care",
}

export interface CreateProductRequest {
  photo?: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: ProductCategory;
}

export interface UpdateProductRequest {
  photo?: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: ProductCategory;
}
