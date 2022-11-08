import { ItemType } from '../../api/types';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import img from '../../assets/loading.gif';
import { saveState } from '../../utils/localStorage';
import { addToFavouriteAction, removeFromFavouriteAction } from '../../bll/photosReducer';

type ImagePropsType = {
  photo: ItemType
  openModalHandler: (imgSrc: string) => void
}

export const Image: FC<ImagePropsType> = ({ photo, openModalHandler }) => {

  const dispatch = useAppDispatch();

  const [currentImg, setCurrentImg] = useState(img);
  const { likedPhotos } = useAppSelector(state => state.photos);

  const addToFavouriteHandler = (e: React.ChangeEvent<HTMLInputElement>, photo: ItemType) => {
    if (e.target.checked) {
      saveState([...likedPhotos, photo]);
      dispatch(addToFavouriteAction(photo));
    } else {
      dispatch(removeFromFavouriteAction(photo));
      saveState(likedPhotos.filter(el => el.id !== photo.id));
    }
  };

  useEffect(() => {return () => { setCurrentImg(img); };}, [photo]);

  return (
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
          style={{
            maxWidth: photo.width / 5 > 300 ? '300px' : photo.width / 5,
            maxHeight: photo.height / 5 > 300 ? '300px' : photo.height / 5,
          }}
          onClick={() => openModalHandler(photo.download_url)}
          onLoad={() => {setCurrentImg(photo.download_url);}}
          src={currentImg}
          alt="photo" />
        <div className="description">
          <div>{photo.author}</div>
          <div>{photo.width} x {photo.width} px</div>
        </div>
      </div>
    </div>
  );
};
