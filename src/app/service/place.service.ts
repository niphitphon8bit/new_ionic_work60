import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  private url:string = "http://localhost:3000";
  constructor(
    private http:Http
  ) { }

  get_all_place_data(){
    return this.http.get(this.url + "/place").map((res) => res.json());
  }

  insert_place_data(name_th:string,name_en:string){
    let data = {
      "place_name_th": name_th,
      "place_name_en": name_en,
      "place_status": "Y",
      "place_user_update": "55"
    }
    return this.http.post(this.url + "/place",data).map((res) => res.json());
  }

  delete_place_data(place_id:string){
    return this.http.delete(this.url + "/place/" + place_id).map((res) => res.json());
  }

  update_place_status(place_id:string,place_status:boolean){
    let data = {
      "place_status": (place_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/place/" + place_id,data).map((res) => res.json());
  }

  update_place_data(place_id:string,place_name_th:string,place_name_en:string){
    let data = {
      "place_name_th": place_name_th,
      "place_name_en": place_name_en
    }
    return this.http.put(this.url + "/place/update/" + place_id,data).map((res) => res.json());
  }
}
