import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ExpertTypeService {

  private url:string = "http://localhost:3000";

  constructor(
    private http: Http
  ) { }
  
  get_all_expert_type_data() {
    return this.http.get(this.url + "/expert_type").map((res) => res.json());
  }

  insert_expert_type_data(name_th:string,name_en:string){
    let data = {
      "ept_name_th": name_th,
      "ept_name_en": name_en,
      "ept_status": "Y",
      "ept_user_update": "55"
    }
    return this.http.post(this.url + "/expert_type",data).map((res) => res.json());
  }

  delete_expert_type_data(ept_id:string){
    return this.http.delete(this.url + "/expert_type/" + ept_id).map((res) => res.json());
  }

  update_expert_type_status(ept_id:string,ept_status:boolean){
    let data = {
      "ept_status": (ept_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/expert_type/" + ept_id,data).map((res) => res.json());
  }

  update_expert_type_data(ept_id:string,ept_name_th:string,ept_name_en:string){
    let data = {
      "ept_name_th": ept_name_th,
      "ept_name_en": ept_name_en
    }
    return this.http.put(this.url + "/expert_type/update/" + ept_id,data).map((res) => res.json());
  }
}
