import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import './photos.scss';
import { addToFavouriteAction, removeFromFavouriteAction } from '../../bll/photosReducer';
import { ItemType } from '../../api/types';
import { PhotoModal } from '../photo-modal/PhotoModal';
import { saveState } from '../../utils/localStorage';

export const Photos = () => {

  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const { photos, likedPhotos } = useAppSelector(state => state.photos);

  const addToFavouriteHandler = (e: React.ChangeEvent<HTMLInputElement>, photo: ItemType) => {
    if (e.target.checked) {
      saveState([...likedPhotos, photo]);
      dispatch(addToFavouriteAction(photo));
    } else {
      dispatch(removeFromFavouriteAction(photo));
      saveState(likedPhotos.filter(el => el.id !== photo.id));
    }
  };

  const openModalHandler = (imgSrc: string) => {
    setModalData(imgSrc);
    setIsOpenModal(true);
  };

  return (
    <div className="photos-wrapper">
      {photos.map(photo =>
        <div key={photo.id} className="item">
          <div className="img">
            <div className="like">
              <input
                onChange={e => addToFavouriteHandler(e, photo)}
                checked={photo.isFavourite}
                id={photo.id} className="toggle-heart" type="checkbox" />
              <label htmlFor={photo.id} aria-label="like">❤</label>
            </div>
            <img
              onClick={() => openModalHandler(photo.download_url)}
              src={photo.download_url}
              alt="photo" />
            <div className="description">
              <div>{photo.author}</div>
              <div>{photo.width} x {photo.width} px</div>
            </div>
          </div>
        </div>)}
      {isOpenModal &&
      <PhotoModal
        src={modalData}
        closeModalHandler={setIsOpenModal} />}
    </div>
  );
};
