import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ListSelector, setD, setU, sortingName, sortingDate} from "../reducers/List";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private store: Store){

  }
  items$ = this.store.select(ListSelector)

  ngOnInit(): void {
    // this.store.dispatch(sorting("name"))
  }
  setUp(index: number){
      if(index > 0)
        this.store.dispatch(setU({index}))
    }
   setDown(index: number){
     //if(index < this.items$.length - 1)
       this.store.dispatch(setD({index}))
  }
  sortingName(){
    this.store.dispatch(sortingName())
  }
  sortingDate(){
    this.store.dispatch(sortingDate())
  }
}
