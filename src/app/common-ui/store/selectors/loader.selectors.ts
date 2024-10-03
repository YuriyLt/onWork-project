import { createSelector } from "@ngrx/store";
import { AppStateInterfaces } from "../../../app-state-interfaces";

export const selectFeature = (state: AppStateInterfaces) => state.posts;

export const isLoadingSelector = createSelector(selectFeature, (state) => state ? state.isLoading: false);