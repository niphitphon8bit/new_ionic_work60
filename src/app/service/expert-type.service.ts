import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ExpertTypeService {

  constructor(
    private http: Http
  ) { }
  
  get_all_expert_type_data() {
    return this.http.get("http://localhost:3000/api/tr_expert_type").map((res) => res.json());
  }

}
