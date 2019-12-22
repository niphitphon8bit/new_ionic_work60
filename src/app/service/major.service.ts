import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(
    private http: Http
  ) { }

  get_all_major_data() {
    return this.http.get("http://localhost:3000/api/tr_major").map((res) => res.json());
  }
}
