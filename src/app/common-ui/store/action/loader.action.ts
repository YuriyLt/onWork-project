import { createAction, props } from "@ngrx/store";

export const getLoader = createAction('[Loader] Get Loader');
export const getLoaderSuccess = createAction('[Loader] Get Loader Success', props<{ loader: any}>());
export const getLoaderFail = createAction('[Loader] Get Loader Fail', props<{ loader: any }>());
export const setLoading = createAction('[Loader] Set Loading', props<{ isLoading: boolean }>());