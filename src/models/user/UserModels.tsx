export interface UserModel {
  name: string;
  email: string;
  role: string;
}

export const TempUserModel: UserModel = {
    name: 'Tom',
    email: 'tom@gmail.com',
    role: 'ADMIN'
}