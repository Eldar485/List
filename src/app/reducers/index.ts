import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import {environment} from '../../environments/environment'
import {listReducer, ListState} from "./List";

export interface State{
  items: ListState
}

export const reducers: ActionReducerMap<State> = {
  items: listReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
