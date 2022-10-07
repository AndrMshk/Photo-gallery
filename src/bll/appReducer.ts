const SET_IS_LOADING = 'app/SET-IS-LOADING';
const SET_ERROR = 'app/SET-ERROR';

const initialState = {
  isLoading: false,
  error: '',
};

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setIsLoadingAction = (isLoading: boolean) => ({ type: SET_IS_LOADING, isLoading } as const);
export const setErrorAction = (error: string) => ({ type: SET_ERROR, error } as const);

type ActionType =
  | ReturnType<typeof setIsLoadingAction>
  | ReturnType<typeof setErrorAction>
