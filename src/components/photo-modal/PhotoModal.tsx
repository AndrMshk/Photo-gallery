import React, { FC } from 'react';
import './photo-modal.scss';

type PhotoModalPropsType = {
  src: string
  closeModalHandler: (isOpenModal: boolean) => void
}

export const PhotoModal: FC<PhotoModalPropsType> = ({ closeModalHandler, src }) => {
  return (
    <div
      className="photo-modal-wrapper"
      onClick={() => closeModalHandler(false)}>
      <img src={src} alt="photo-modal" />
    </div>
  );
};
