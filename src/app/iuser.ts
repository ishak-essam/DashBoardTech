export interface IUser {
  FullName: string;
  Email: string;
  MobilleNumber: string[];
  Address: {
    City: string;
    PostalCode: string;
    Street: string;
  };
  Password: string;
  ConfirmPassword: string;
}
export interface IStudent {
  "name": string,
  "phoneNumber": string,
  "parentPhone": string,
  "levelID": number,
  "email": string,
  "password": string,
  "confirmPassword": string,
  "schoolName": string,
  "city": string
}
