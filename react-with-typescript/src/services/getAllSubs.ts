import axios from "axios";
import { Sub, SubsResponseFromApi } from "../types";

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApi);
};

export const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return axios
    .get<SubsResponseFromApi>("http://localhost:3001/subs")
    .then((response) => response.data);
};

export const mapFromApi = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    return {
      nick: subFromApi.nick,
      avatar: subFromApi.profileUrl,
      subMonths: subFromApi.months,
      description: subFromApi.description,
    };
  });
};
