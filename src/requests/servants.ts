import { api } from "./api";
import { IServants } from "../ts/types";

export const getServants = (): Promise<IServants[]> =>
  api.get("/publicservant").then((response) => response.data);

//delete request
export const deleteServants = (email: string): Promise<IServants> =>
  api.delete(`/publicservant/${email}`).then((response) => response.data);
