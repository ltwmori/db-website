import { api } from "./api";
import { ICountry } from "../ts/types";

export const getCountry = (): Promise<ICountry[]> =>
  api.get("/country").then((response) => response.data);

export const postCountry = (
  country: ICountry
): Promise<ICountry> =>
  api.post("/country", country).then((response) => response.data);

//delete request
export const deleteCountry = (cname: string): Promise<ICountry> =>
  api.delete(`/country/${cname}`).then((response) => response.data);
