import React, { FC } from 'react';
import './error-meggage.scss';
import { useAppDispatch } from '../../bll/store';
import { setErrorAction } from '../../bll/appReducer';

type ErrorMessagePropsType = {
  error?: string
}

export const ErrorMessage: FC<ErrorMessagePropsType> = ({ error }) => {

  const dispatch = useAppDispatch();

  const closeMessageHandler = () => {
    dispatch(setErrorAction(''));
  };

  return (
    <div className="error-message-wrapper">
      <div
        onClick={closeMessageHandler}
        className="error-message-text">
        {error}
      </div>
    </div>
  );
};
