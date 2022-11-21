import { api } from "./api";
import { ISpezialize } from "../ts/types";

export const getSpecialize = (): Promise<ISpezialize[]> =>
  api.get("/specialize").then((response) => response.data);

//delete request
export const deleteSpecialize = (id: number): Promise<ISpezialize> =>
  api.delete(`/specialize/${id}`).then((response) => response.data);
