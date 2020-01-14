import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class DevelopService {

  constructor(
    private http: Http
  ) { }

  get_all_develop_data() {
    return this.http.get("http://localhost:3000/api/tr_develop").map((res) => res.json());
  }

}
