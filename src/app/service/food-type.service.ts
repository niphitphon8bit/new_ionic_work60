import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {

  constructor(
    private http:Http
  ) { }

  get_all_food_type_data(){
    return this.http.get("http://localhost:3000/api/tr_food_type").map((res) => res.json());
  }
}
