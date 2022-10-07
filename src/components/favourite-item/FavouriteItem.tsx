import React, { FC } from 'react';
import './favourite-item.scss';
import deleteIcon from '../../common/assets/delete-icon.svg';

type FavouriteItemPropsType = {
  author: string
  width: number
  height: number
  download_url: string
  removeFromFavourite: () => void
  setIsOpenModal: (isOpenModal: boolean) => void
}

export const FavouriteItem: FC<FavouriteItemPropsType> =
  ({ download_url, author, width, height, removeFromFavourite, setIsOpenModal }) => {

    return (
      <div className="favourite-item-wrapper">
        <img
          onClick={() => {setIsOpenModal(true);}}
          className="photo"
          src={download_url}
          alt="photo" />
        <div className="title">
          <div>Author: {author}</div>
          <div>Size: {width} x {height} px</div>
        </div>
        <img
          onClick={removeFromFavourite}
          className="delete-button"
          src={deleteIcon}
          alt="delete-button" />
      </div>
    );
  };
