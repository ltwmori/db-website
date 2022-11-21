import { api } from "./api";
import { IDisease } from "../ts/types";

export const getDisease = (): Promise<IDisease[]> =>
  api.get("/disease").then((response) => response.data);

  //delete request
export const deleteDisease = (disease_code: string): Promise<IDisease> =>  
api.delete(`/disease/${disease_code}`).then((response) => response.data);