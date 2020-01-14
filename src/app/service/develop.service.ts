import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DevelopService {

  private url:string = "http://localhost:3000";
  constructor(
    private http:Http
  ) { }

  get_all_develops_data(){
    return this.http.get(this.url + "/dev").map((res) => res.json());
  }

  insert_develops_data(name_th:string,name_en:string){
    let data = {
      "dev_name_th": name_th,
      "dev_name_en": name_en,
      "dev_status": "Y",
      "dev_user_update": "55"
    }
    return this.http.post(this.url + "/dev",data).map((res) => res.json());
  }

  delete_develops_data(dev_id:string){
    return this.http.delete(this.url + "/dev/" + dev_id).map((res) => res.json());
  }

  update_develops_status(dev_id:string,dev_status:boolean){
    let data = {
      "dev_status": (dev_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/dev/" + dev_id,data).map((res) => res.json());
  }

  update_develops_data(dev_id:string,dev_name_th:string,dev_name_en:string){
    let data = {
      "dev_name_th": dev_name_th,
      "dev_name_en": dev_name_en
    }
    return this.http.put(this.url + "/dev/update/" + dev_id,data).map((res) => res.json());
  }

}
