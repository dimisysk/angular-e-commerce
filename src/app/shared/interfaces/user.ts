export interface User {
  user: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    ssn: string;
    email: string;
    phone: string;
    address: string;
    addressNumber: string;
    city: string;
    zip: string;
    gender: string;
  };
  discountCardNumber: string;
}

export interface CustomerReadOnlyDTO {
  user: {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    ssn: string;
    email: string;
    phone: string;
    address: string;
    addressNumber: string;
    city: string;
    zip: string;
    gender: string;
    role: string;
    isActive: boolean
  };
  uuid: string;
  id: number;
  discountCardNumber: number;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageable: object;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface LoggedInUser {
  username: string;
  role: string;
}

export interface Credentials {
  username: string;
  password: string;
}
