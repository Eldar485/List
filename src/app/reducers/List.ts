import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export interface Item {
  name: string,
  date: Date
}

export const add = createAction(
  '[List] add',
  props<{ newItem: Item }>(),
)
export const remove = createAction(
  '[List] remove',
  props<{ date: Date }>(),
)
export const sortingName = createAction(
  '[List] sortingName',
)
export const sortingDate = createAction(
  '[List] sortingDate',
)
export const setU = createAction(
  '[List] setU',
  props<{ index: number }>(),
)
export const setD = createAction(
  '[List] setD',
  props<{ index: number }>(),
)

export interface ListState {
  items: Item[];
  sort: number
}


export const initialState: ListState = {
    items: [
      {name: 'ГГ', date: new Date},
      {name: 'ВВ', date: new Date},
      {name: 'ББ', date: new Date},
      {name: 'АА', date: new Date}
    ],
    sort: 0
}

export const listReducer = createReducer(
  initialState,
  on(add, (state, action) => ({
    ...state,
    items: [...state.items, action.newItem]
  })),
  on(remove, (state, action) => ({
    ...state,
    items: state.items.filter(it => {return it.date !== action.date})
  })),
  on(setU, (state, action) => ({
    ...state,
    items: state.items.map(
      (element, index) =>
        index === action.index
          ? state.items[action.index - 1]
          : index === action.index - 1
          ? state.items[action.index]
          : element)
  })),
  on(setD, (state, action) => ({
    ...state,
    items: state.items.map(
      (element, index) =>
          action.index < state.items.length - 1
          && index === action.index
            ? state.items[action.index + 1]
            : index === action.index + 1
            ? state.items[action.index]
            : element)
  })),
  on(sortingName, (state) => ({
    ...state,
      items:  state.items.slice().sort((a, b) =>{
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
      return 0;
      })
  })),
  on(sortingDate, (state) => ({
    ...state,
     items: state.items.slice().sort((a, b) => b.date.valueOf() - a.date.valueOf())
}))
)

export const featureSelector = createFeatureSelector<ListState>('items')
export const ListSelector = createSelector(
  featureSelector,
  state => state.items
)
export const SortSelector = createSelector(
  featureSelector,
  state => state.sort
)
