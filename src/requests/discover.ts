import { api } from "./api";
import { IDiscover } from "../ts/types";

export const getDiscover = (): Promise<IDiscover[]> =>
  api.get("/discover").then((response) => response.data);

  //delete request
export const deleteDiscover = (cname: string): Promise<IDiscover> => 
api.delete(`/discover/${cname}`).then((response) => response.data);
