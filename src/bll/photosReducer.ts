import { GetPhotosParamsType, ItemType } from '../api/types';

const SET_PHOTOS = 'photos/SET-PHOTOS';
const SET_LIKED_PHOTOS = 'photos/SET-LIKED_PHOTOS';
const SET_PAGINATION_PARAMS = 'photos/SET-PAGINATION-PARAMS';
const SET_IS_SHOW_FAVOURITE = 'photos/SET-IS-SHOW-FAVOURITE';
const ADD_TO__FAVOURITES = 'photos/ADD-TO-FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'photos/REMOVE-FROM-FAVOURITES';

const initialState = {
  photos: [] as ItemType[],
  likedPhotos: [] as ItemType[],
  paginationParams: {
    limit: 6,
    page: 1,
  },
  isShowFavourite: false,
};

type InitialStateType = typeof initialState

export const photosReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos.map(photo =>
          ({
            ...photo, isFavourite:
              state.likedPhotos.some(el => el.id === photo.id),
          })),
      };
    case SET_LIKED_PHOTOS:
      return { ...state, likedPhotos: action.likedPhotos ? [...action.likedPhotos] : [] };
    case SET_PAGINATION_PARAMS:
      return { ...state, paginationParams: { ...state.paginationParams, ...action.paginationParams } };
    case SET_IS_SHOW_FAVOURITE:
      return { ...state, isShowFavourite: action.isShowFavourite };
    case ADD_TO__FAVOURITES:
      return {
        ...state,
        photos: state.photos.map(photo => photo.id === action.item.id ? { ...photo, isFavourite: true } : photo),
        likedPhotos: [...state.likedPhotos, { ...action.item, isFavourite: true }],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter(photo => photo.id !== action.item.id),
        photos: state.photos.map(photo => photo.id === action.item.id ? { ...photo, isFavourite: false } : photo),
      };
    default:
      return state;
  }
};

export const setPhotosAction = (photos: ItemType[]) => ({ type: SET_PHOTOS, photos } as const);
export const setLikedPhotosAction = (likedPhotos: ItemType[]) => ({ type: SET_LIKED_PHOTOS, likedPhotos } as const);
export const setPaginationParamsAction = (paginationParams: GetPhotosParamsType) =>
  ({ type: SET_PAGINATION_PARAMS, paginationParams } as const);
export const setIsShowFavouriteAction = (isShowFavourite: boolean) =>
  ({ type: SET_IS_SHOW_FAVOURITE, isShowFavourite } as const);
export const addToFavouriteAction = (item: ItemType) => ({ type: ADD_TO__FAVOURITES, item } as const);
export const removeFromFavouriteAction = (item: ItemType) => ({ type: REMOVE_FROM_FAVOURITES, item } as const);

type ActionType =
  | ReturnType<typeof setPhotosAction>
  | ReturnType<typeof setLikedPhotosAction>
  | ReturnType<typeof setPaginationParamsAction>
  | ReturnType<typeof setIsShowFavouriteAction>
  | ReturnType<typeof addToFavouriteAction>
  | ReturnType<typeof removeFromFavouriteAction>

