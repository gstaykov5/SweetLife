import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('f') createPostForm: NgForm;
  user: string;
  pass: string;
  authenticated: Boolean = false;
  imageTitle: string;
  imageDescription: any;
  // imageFile: File;
  fileToUpload: any;
  pathMain: string = 'images';
  pathSubsection: string;

  constructor
    (
      private adminService: AdminService,
  ) { }
  
  ngOnInit(): void { }
  
  
  
  login(ev) {
    const body = { login: this.user, password: this.pass };
    this.adminService.logIn(body);
  }
  
  
  createPost() {
    let name = this.createPostForm.value.title;
    let formData = new FormData();
    formData.append(`file`, this.fileToUpload);
    debugger
    this.adminService.uploadImage(formData, this.pathMain, this.pathSubsection, name)
      .subscribe(
        res => {
        },
        err => {
        }
      );
  }


  // imageInputChange(imageInput: any) {
  //   this.imageFile = imageInput.files[0];
  // }


  handleFileInput(event) {
    this.fileToUpload = event.target.files[0];
  }


}
