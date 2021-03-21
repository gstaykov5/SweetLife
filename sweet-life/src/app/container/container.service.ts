import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContainerService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=37b7be6bd84859b60295d7206b9f0530')
  }
}
