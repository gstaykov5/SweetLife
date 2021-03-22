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
  // jsApiKey: string = 'E5249630-930A-45F5-A423-2A5ABF819D72';
  // apiKey: string = '97AD68B7-2E21-4DC7-A989-F56528D2BB6F';
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


  getImages(): Observable<any> {
    const url = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/files/images`;
    const headers = new HttpHeaders({
      'user-token': this.authToken || sessionStorage.getItem('userToken'),
    });
    
    return this.http.get(url, {headers});
  }

  loadComponents(target): Observable<any> {
    const url = `https://eu-api.backendless.com/${this.applicationID}/${this.restApiKey}/files/images/${target}`;
    const headers = new HttpHeaders({
      'user-token': this.authToken || sessionStorage.getItem('userToken'),
    });
    
    return this.http.get(url, {headers});
  }

}
