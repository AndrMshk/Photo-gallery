import { ItemType } from '../api/types';

export const loadState = () => {
  const serializedState = localStorage.getItem('likedPhotos');
  if (serializedState) {
    return JSON.parse(serializedState);
  }
};

export const saveState = (state: ItemType[]) => {
  localStorage.setItem('likedPhotos', JSON.stringify(state));
};
