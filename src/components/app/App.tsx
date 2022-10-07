import React, { useEffect } from 'react';
import { Preloader } from '../preloader/Preloader';
import './app.scss';
import { ProjectRoutes } from '../routes/ProjectRoutes';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import { Header } from '../header/Header';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { setPhotos } from '../../bll/asyncActions';
import { Pagination } from '../pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { loadState } from '../../utils/localStorage';
import { setLikedPhotosAction } from '../../bll/photosReducer';

function App() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, isLoading } = useAppSelector(state => state.app);
  const { paginationParams, isShowFavourite } = useAppSelector(state => state.photos);

  useEffect(() => {
    dispatch(setLikedPhotosAction(loadState()));
    dispatch(setPhotos({ ...paginationParams }));
  }, [paginationParams]);

  useEffect(() => {
    isShowFavourite ? navigate('/liked-photos') : navigate('/photos');
  }, [isShowFavourite]);

  return (
    <>
      <Header />
      <div className="container">
        <ProjectRoutes />
      </div>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Preloader />}
      <Pagination />
    </>
  );
}

export default App;
