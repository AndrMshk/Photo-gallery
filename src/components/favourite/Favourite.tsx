import React, { useEffect, useState } from 'react';
import './favourite.scss';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import { FavouriteItem } from './favouriteItem/FavouriteItem';
import { ItemType } from '../../api/types';
import { removeFromFavouriteAction, setIsShowFavouriteAction } from '../../bll/photosReducer';
import { saveState } from '../../utils/localStorage';
import { PhotoModal } from '../photos/photoModal/PhotoModal';

export const Favourite = () => {

  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const likedPhotos = useAppSelector(state => state.photos.likedPhotos);

  const removeFromFavouriteHandler = (item: ItemType) => {
    saveState(likedPhotos.filter(el => el.id !== item.id));
    dispatch(removeFromFavouriteAction(item));
  };

  const openModalHandler = (imgSrc: string) => {
    setModalData(imgSrc);
    setIsOpenModal(true);
  };

  useEffect(() => {
    likedPhotos.length === 0 && dispatch(setIsShowFavouriteAction(false));
  }, [likedPhotos]);

  return (
    <div className="favourite-wrapper">
      {likedPhotos.map(photo =>
        <FavouriteItem
          key={photo.id}
          {...photo}
          setIsOpenModal={() => openModalHandler(photo.download_url)}
          removeFromFavourite={() => removeFromFavouriteHandler(photo)} />)}
      {isOpenModal &&
      <PhotoModal
        src={modalData}
        closeModalHandler={setIsOpenModal} />}
    </div>
  );
};
