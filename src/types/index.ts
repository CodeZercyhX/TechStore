export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface User {
  username: string;
  role: 'admin' | 'customer';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}