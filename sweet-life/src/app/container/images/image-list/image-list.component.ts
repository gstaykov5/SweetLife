import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any;
  
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getImages()
    .subscribe(res => {
      this.images = res;
      console.log(res)
    });
  }

}
