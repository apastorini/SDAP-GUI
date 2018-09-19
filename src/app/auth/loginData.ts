export interface Login {
  mail: string;
  password: string;
}
export interface Logout {
  mail: string;
  password: string;
  token:string;
}

export interface Session {
  email:string;
  token:string;
  role:string;
}
