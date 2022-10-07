import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page-not-found.scss';

export const PageNotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="page-not-found-wrapper">
      <h1>Page not found</h1>
      <h1>404</h1>
      <h4 onClick={() => {navigate('/');}}>Back</h4>
    </div>
  );
};
