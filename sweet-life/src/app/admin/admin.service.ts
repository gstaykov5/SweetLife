import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import ImageInfo from '../core/models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  applicationID: string = '66DC5C9B-90FE-9C28-FF95-E4869BE0D800';
  restApiKey: string = '5C540C05-6541-48C5-B196-4BFCD603F749';
  authToken: any;
  
  constructor(private http: HttpClient,) { }
  
  uploadImage(body, path, subsection, fileName) : Observable<any>  {
    const headers = new HttpHeaders({
      'user-token': this.authToken || sessionStorage.getItem('userToken'),
    })
    
    const url = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/files/${path}/${fileName}?overwrite=true`;
    debugger
    return this.http.post<ImageInfo>(url, body, {headers});
  }
  
  
  logIn(body) {
    const logInUrl = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/users/login`;
    return this.http.post(logInUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      res => {
        this.authToken = res['user-token'];
        sessionStorage.setItem('userToken', this.authToken);
      },
      err => {
        console.warn(err);
      })
  }


  getImages(firstPath, secondPath): Observable<any> {
    const url = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/files/images/${firstPath}/${secondPath}`;
    const headers = new HttpHeaders({
      'user-token': this.authToken || sessionStorage.getItem('userToken'),
    });
    
    return this.http.get(url, {headers});
  }

  // loadComponents(firstPath): Observable<any> {
  //   const url = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/files/images/${firstPath}`;
  //   const headers = new HttpHeaders({
  //     'user-token': this.authToken || sessionStorage.getItem('userToken'),
  //   });
    
  //   return this.http.get(url, {headers});
  // }

}
