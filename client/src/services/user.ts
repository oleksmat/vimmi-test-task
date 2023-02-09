export interface User {
  id: string;
  name: string;
  email: string;
  city: string;
  description: string;
}

export type UserListItem = Omit<User, 'description'>;
