import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { appReducer } from './appReducer';
import { photosReducer } from './photosReducer';

const rootReducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
  },
);

export type ThunkTypes<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AnyAction>
export type DispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

