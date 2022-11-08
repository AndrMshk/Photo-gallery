import React, { useState } from 'react';
import { useAppSelector } from '../../bll/store';
import './photos.scss';
import { PhotoModal } from './photoModal/PhotoModal';
import { Image } from './Image';

export const Photos = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const { photos } = useAppSelector(state => state.photos);

  const openModalHandler = (imgSrc: string) => {
    setModalData(imgSrc);
    setIsOpenModal(true);
  };

  return (
    <div className="photos-wrapper">
      {photos.map(photo =>
        <Image
          openModalHandler={openModalHandler}
          photo={photo} />)}
      {isOpenModal &&
      <PhotoModal
        src={modalData}
        closeModalHandler={setIsOpenModal} />}
    </div>
  );
};

