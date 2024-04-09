import {IUser, IUserResponse} from "../store/types";

const isMatch = (id: string, name: string, searchData: string[]): boolean => {
  let result: boolean = false;

  searchData.forEach((searchString) => {
    const lowercase = searchString.toLowerCase();
    if (id.includes(lowercase) || name.toLowerCase().includes(lowercase)) {
      result = true;
    }
  });

  return result;
}

const searchUsers = (users: IUserResponse[], searchData: string[]): IUser[] => {
  const result: IUser[] = [];

  users.forEach((user) => {
    const id = String(user.id);
    const name = user.name;
    if (isMatch(id, name, searchData)) {
      const about = `Вот некоторые факты, которые указал сотрудник. Вебсайт: ${user.website}, Компания: ${user.company.name}, Город: ${user.address.city}, Улица: ${user.address.street}.`;
      result.push({
        id,
        name,
        phone: user.phone,
        email: user.email,
        about,
      });
    }
  });

  return result;
}

export default searchUsers;
