import { createReducer, on } from "@ngrx/store";
import { loaderStateInterface } from "../state/loaderState.interface";
import * as LoaderActions from '../action/loader.action';

export const initialState: loaderStateInterface = {
    isLoading: false,
    error: null,
    loader: null,
};

export const reducers = createReducer(
    initialState,
    on(LoaderActions.getLoader, (state) => ({...state, isLoading: true, error:null
    })),
    on(LoaderActions.getLoaderSuccess, (state, { loader }) => ({...state, isLoading: false, error: null
    })),
    on(LoaderActions.getLoaderFail, (state, { loader }) => ({...state, isLoading: false, error: loader
    })),
    on(LoaderActions.setLoading, (state, { isLoading }) => ({...state, isLoading
    }))
)