import { createAction, props } from "@ngrx/store";
import { IActivityItem } from "./activities.state";

export const loadActivities = createAction('[Activities] Load Activities');
export const loadActivitiesSuccess = createAction(
    '[Activities] Load Activities Success',
    props<{ entities: IActivityItem[] }>()
);
export const loadActivitiesError = createAction(
    '[Activities] Load Activities Error',
);