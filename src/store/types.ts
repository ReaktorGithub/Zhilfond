export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  about: string;
}

export interface IAppInitialState {
  loading: boolean;
  search: string;
  searchParsed: string[];
  users: IUser[];
  selectedUserId: string | null;
}
