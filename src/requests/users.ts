import { api } from "./api";
import { IUser } from "../ts/types";

export const getUsers = (): Promise<IUser[]> =>
  api.get("/users").then((response) => response.data);

export const postUser = (user: IUser): Promise<IUser> =>
  api.post("/users", user).then((response) => response.data);

  
//put request
export const putUser = (user: IUser
): Promise<IUser> =>
  api.put(`/users/${user.email}`, user).then((response) => response.data);


//delete request
export const deleteUser = (email: string): Promise<IUser> =>
  api.delete(`/users/${email}`).then((response) => response.data);
