import { api } from "./api";
import { IDisease, IDiseaseType } from "../ts/types";

export const getDiseaseType = (): Promise<IDisease[]> =>
  api.get("/disease_type").then((response) => response.data);

export const postDiseaseType = (
  diseaseType: IDiseaseType
): Promise<IDiseaseType> =>
  api.post("/disease_type", diseaseType).then((response) => response.data);

  //delete request
export const deleteDiseaseType = (id: number): Promise<IDiseaseType> =>
  api.delete(`/disease_type/${id}`).then((response) => response.data);
