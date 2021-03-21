import { Component, OnInit } from '@angular/core';
// import { ContainerService } from '../container.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // lat: string = '';
  // lng: string = '';
  // location: Object;
  
  constructor() { }
  // private map: ContainerService

  ngOnInit(): void {
    // this.map.getLocation().subscribe(data => {
    //   this.lat = data.latitude;
    //   this.lng = data.longitude;
    // })
  }

}
