import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Photos } from '../photos/Photos';
import { Favourite } from '../favourite/Favourite';
import { PageNotFound } from '../pageNotFound/PageNotFound';

export const ProjectRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/photos'} />} />
        <Route path={'/photos'} element={<Photos />} />
        <Route path={'/liked-photos'} element={<Favourite />} />
        <Route path={'/404'} element={<PageNotFound />} />
        <Route path={'*'} element={<Navigate to={'/404'} />} />
      </Routes>
    </>);
};
