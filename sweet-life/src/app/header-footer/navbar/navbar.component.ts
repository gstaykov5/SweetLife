import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  check: boolean = false;

  constructor() { }

  ngOnInit(): void {  }

}
