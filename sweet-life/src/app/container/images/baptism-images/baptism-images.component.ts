import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-baptism-images',
  templateUrl: './baptism-images.component.html',
  styleUrls: ['./baptism-images.component.css']
})
export class BaptismImagesComponent implements OnInit {

  firstPath: string = 'АКСЕСОАРИ ЗА КРЪЩЕНЕ';
  secondPath: string;
  images: any;
  
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }


  getImages(e) {
    this.secondPath = e.target.textContent;
    this.adminService.getImages(this.firstPath, this.secondPath)
      .subscribe(res => {
        this.images = res;
      })
  }

}
