import axios, { AxiosResponse } from 'axios';
import { GetPhotosParamsType, ItemType } from './types';

const instance = axios.create({
  baseURL: 'https://picsum.photos',
});

export const API = {
  getPhotos(params: GetPhotosParamsType) {
    return instance.get<GetPhotosParamsType, AxiosResponse<ItemType[]>>(`/v2/list`,
      { params: { ...params } });
  },
};
