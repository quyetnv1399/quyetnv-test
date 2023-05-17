import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3000/user';

  getUser(){
    return this.http.get(`${this.URL}`);
  }
}
