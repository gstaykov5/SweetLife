import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  category: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  click (e) {
    this.category = e.path[1].className;
  }
}
