import { api } from "./api";
import { IDoctor } from "../ts/types";

export const getDoctor = (): Promise<IDoctor[]> =>
  api.get("/doctor").then((response) => response.data);

//delete request
export const deleteDoctor = (email: string): Promise<IDoctor> =>
  api.delete(`/doctor/${email}`).then((response) => response.data);
