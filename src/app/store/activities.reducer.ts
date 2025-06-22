import { createReducer, on } from "@ngrx/store";
import { IActivitiesState } from "./activities.state";
import { loadActivities, loadActivitiesError, loadActivitiesSuccess } from "./activities.actions";

export const initialState: IActivitiesState = {
    entities: [],
    isLoading: false
}

export const activitiesReducer = createReducer(
    initialState, 
    on(loadActivities, (state) => ({
        ...state,
        isLoading: true
    })),
    on(loadActivitiesSuccess, (state, { entities }) => ({
        ...state,
        entities,
        isLoading: false
    })),
    on(loadActivitiesError, (state) => ({
        ...state,
        isLoading: false
    })),
);