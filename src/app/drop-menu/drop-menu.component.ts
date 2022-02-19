import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {
 @HostBinding('class')
  hostClass = 'hidden'
  private skipClick = false

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('click', ['$event'])
  hostClick(event: Event){
    event.stopPropagation()
  }
  show(){
   this.hostClass = ''
    this.skipClick = true
  }
  @HostListener('window: click')
  hide(){
   if(this.skipClick){
     this.skipClick = false
     return;
   }
    this.hostClass = 'hidden'
  }
}
