import { createAction, emptyProps } from "@ngrx/store";

export const getLoader = createAction('[Loader] Get Loader', emptyProps);
export const getLoaderSuccess = createAction('[Loader] Get Loader Success', emptyProps);
