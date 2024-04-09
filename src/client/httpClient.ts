import {instance} from "./instance";
import {AxiosResponse} from "axios";

export const httpClient = {
  // post(urn: string, data?: unknown): Promise<AxiosResponse<unknown, unknown>> {
  //   return instance.post(urn, data);
  // },
  get<T>(urn: string): Promise<AxiosResponse<T, unknown>> {
    return instance.get(urn);
  },
}
