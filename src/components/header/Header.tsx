import React from 'react';
import './header.scss';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import { setIsShowFavouriteAction } from '../../bll/photosReducer';

export const Header = () => {

  const dispatch = useAppDispatch();

  const { isShowFavourite, likedPhotos } = useAppSelector(state => state.photos);

  const toggleIsShowFavouriteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsShowFavouriteAction(e.target.checked));
  };

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="title">Photo-gallery</div>
        <div className="favourite">
          <div className="text">Favourite</div>
          <input
            disabled={likedPhotos.length === 0}
            checked={isShowFavourite}
            onChange={toggleIsShowFavouriteHandler}
            id="favourite" className="toggle-favourite" type="checkbox" />
          <label htmlFor="favourite">❤</label>
        </div>
      </div>
    </div>
  );
};
