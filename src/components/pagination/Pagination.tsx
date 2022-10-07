import React from 'react';
import { useAppDispatch, useAppSelector } from '../../bll/store';
import './pagination.scss';
import { Select } from '../select/Select';
import { setPaginationParamsAction } from '../../bll/photosReducer';

export const Pagination = () => {

  const dispatch = useAppDispatch();

  const page = useAppSelector(state => state.photos.paginationParams.page);

  return (
    <div className="pagination-wrapper">
      <div
        onClick={() => {dispatch(setPaginationParamsAction({ page: page - 1 }));}}
        className={page === 1 ? 'button disabled' : 'button'}>
        Previous
      </div>
      <Select />
      <div
        onClick={() => {dispatch(setPaginationParamsAction({ page: page + 1 }));}}
        className="button">
        Next
      </div>
    </div>
  );
};
