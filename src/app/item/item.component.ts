import {Component, Input, OnInit, Output} from '@angular/core';
import { Item } from '../editor/editor.component'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  show: boolean = false
  now = new Date();
  @Input() item: Item = {name: '', date: this.now }
  @Input() page: Number = 0
  @Input() index: Number = 0
  @Output() delete = new EventEmitter();
  @Output() copy = new EventEmitter();
  @Output() setUp = new EventEmitter();
  @Output() setDown = new EventEmitter();

  deleteItem(){
    this.delete.emit((this.item.date))
  }
  copyItem(){
    this.copy.emit(this.item.name)
  }
  up(){
    this.setUp.emit((this.index))
  }
  down(){
    this.setDown.emit((this.index))
  }
  showDrop() {
    this.show = true
  }
  hiddenDrop(){
    this.show = false
  }

  constructor() { }

  ngOnInit(): void {}

}
