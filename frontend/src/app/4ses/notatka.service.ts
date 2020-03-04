import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotatkaService {

  constructor(
    private http: HttpClient,
  ) { }

  getList() {
    return this.http.get("http://localhost/api/notatka/");
  }
}
