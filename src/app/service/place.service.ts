import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: Http
  ) { }

  get_all_place_data() {
    return this.http.get("http://localhost:3000/api/tr_place").map((res) => res.json());
  }
}
