import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {

  images: any;
  target: string;
  components: [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getImages()
      .subscribe(res => {
        this.images = res;
      });
  };

  loadComponents(e) {
    this.target = e.target.textContent;
    console.log(this.target)
    this.adminService.loadComponents(this.target)
      .subscribe(res => {
        this.components = res;
      });
  };

}
