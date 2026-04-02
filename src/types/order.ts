export interface Order {
  photo: string;
  name: string;
  address: string;
  products: number;
  price: number;
  status: OrderStatus;
  order_date: Date;
}

export enum OrderStatus {
  Completed = "Completed",
  Confirmed = "Confirmed",
  Pending = "Pending",
  Cancelled = "Cancelled",
  Processing = "Processing",
  Shipped = "Shipped",
  Delivered = "Delivered",
}

export interface OrderServiceParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: {
    name?: string;
    address?: string;
    products?: number | null;
    status?: OrderStatus | null;
    price?: number | null;
    order_date?: Date;
  };
}
