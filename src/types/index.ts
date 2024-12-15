export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  images?: string[];
  deliveryEstimate?: {
    date: string;
    isPrime: boolean;
  };
  specifications?: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  username: string;
  email: string;
  mobile: string;
}

export interface Address {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  address: Address;
  paymentMethod: string;
  orderDate: string;
  status: 'pending' | 'delivered' | 'processing' | 'cancelled';
}

export interface Return {
  orderId: string;
  itemId: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface Deal extends Omit<Product, 'rating'> {
  discountPercentage: number;
  timeLeft: string;
  claimed: number;
  rating: number;
  ratingCount: number;
}

export interface GiftCard {
  id: number;
  provider: string;
  image: string;
  denominations: number[];
  description: string;
}