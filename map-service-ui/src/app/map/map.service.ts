import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const host = "http://localhost:8082";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private http: HttpClient,
  ) { }

  getGeolocation(): any {
    return this.http.get(host+"/api/maps", { observe: 'response' })
  }
}