import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-party-images',
  templateUrl: './party-images.component.html',
  styleUrls: ['./party-images.component.css']
})
export class PartyImagesComponent implements OnInit {

  firstPath: string = 'АКСЕСОАРИ ЗА СВАТБА';
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
