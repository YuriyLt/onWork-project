import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loaderStateInterface } from "../state/loaderState.interface";


export const isLoadingSelector = createFeatureSelector<loaderStateInterface>('posts');

export const preloaderSelector = createSelector(
    isLoadingSelector,
    (posts: loaderStateInterface) => posts.isLoading
)