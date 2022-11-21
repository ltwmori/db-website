import { api } from "./api";
import { IRecord } from "../ts/types";

export const getRecord = (): Promise<IRecord[]> =>
  api.get("/record").then((response) => response.data);

//delete request
export const deleteRecord = (email: string): Promise<IRecord> =>
  api.delete(`/record/${email}`).then((response) => response.data);
