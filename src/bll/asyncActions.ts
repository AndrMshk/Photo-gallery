import { GetPhotosParamsType } from '../api/types';
import { setErrorAction, setIsLoadingAction } from './appReducer';
import { ThunkTypes } from './store';
import { API } from '../api/api';
import { setPhotosAction } from './photosReducer';
import axios from 'axios';

export const setPhotos = (params: GetPhotosParamsType): ThunkTypes => async dispatch => {
  try {
    dispatch(setIsLoadingAction(true));
    const res = await API.getPhotos(params);
    dispatch(setPhotosAction(res.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(setErrorAction(error.message));
    } else {
      dispatch(setErrorAction('Some error'));
    }
  } finally {
    dispatch(setIsLoadingAction(false));
  }
};
