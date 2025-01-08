import { GenderType } from "../enumus/gender-type";

export interface Customer {
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
    gender: GenderType;
    discountCardNumber: string; 
}

export interface LoggedInUser {
    firstName: string;
    lastName: string;
  }
