import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {add, ListSelector, remove, sortingName, sortingDate, SortSelector} from "../reducers/List";

export interface Item {
  name: string,
  date: Date
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit{

  constructor(private store: Store){
    this.store.pipe(select(SortSelector))
  }

  items$ = this.store.select(ListSelector)
  sort$ = this.store.select(SortSelector)
  itemText = ''

  sortingName(){
    this.store.dispatch(sortingName())
  }
  sortingDate(){
    this.store.dispatch(sortingDate())
  }

  ngOnInit(): void {
  }
  addNewItem(){
    if (this.itemText != '') {
      let newItem: Item = {name: this.itemText, date: new Date()}
        this.store.dispatch(add({newItem}))
      this.itemText = ''
    }
  }
  copyItem(copy: string){
    let newItem = {name: copy, date: new Date()}
     this.store.dispatch(add({newItem}))
  }
  deleteItem(date: Date){
    this.store.dispatch(remove({date}))

  }
}
