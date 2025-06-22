export interface IActivityItem {
    id: string;
    name: string;
}

export interface IActivitiesState {
    entities: IActivityItem[];
    isLoading: boolean;
}