export type OrderItem = {
  id: string;
  name: string;
  image: string;
  category?: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    line1: string;
    notes?: string;
  };
  estimatedDelivery?: string;
};
