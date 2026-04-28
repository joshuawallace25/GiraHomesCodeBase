export type PropertyType = 'Apartment' | 'Villa' | 'Office' | 'House';
export type PropertyStatus = 'FOR SALE' | 'FOR RENT' | 'PRE-LAUNCH' | 'CONSTRUCTION STARTED' | 'SELLING FAST';

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  address?: string;
  type: PropertyType;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
  images?: string[];
  featured?: boolean;
  status?: PropertyStatus;
  description?: string;
  amenities?: string[];
  agent?: Agent;
}

export interface Agent {
  name: string;
  role: string;
  image: string;
  verified?: boolean;
  phone?: string;
  whatsapp?: string;
}

export interface Development {
  id: string;
  title: string;
  status: PropertyStatus;
  description: string;
  image: string;
}
