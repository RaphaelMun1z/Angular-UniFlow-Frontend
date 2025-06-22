import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IActivitiesState } from "./activities.state";

const getActivitiesState = createFeatureSelector<IActivitiesState>('activities');

export const getActivities = createSelector(
    getActivitiesState,
    (state: IActivitiesState) => state.entities
);

export const getActivitiesLoading = createSelector(
    getActivitiesState,
    (state: IActivitiesState) => state.isLoading
);