
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
      id: Number;
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
      
    };
    
    discountCardNumber: number;
  }
  
  

export interface LoggedInUser {
    username: string;
    role: string;
  }

  export interface Credentials {
    username: string;
    password: string;
  }
