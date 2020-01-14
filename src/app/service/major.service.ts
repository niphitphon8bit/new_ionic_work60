import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  
  private url:string = "http://localhost:3000";
  constructor(
    private http: Http
  ) { }

  get_all_major_data() {
    return this.http.get(this.url + "/tr_major").map((res) => res.json());
  }
  insert_major_data(name_th:string,name_en:string){
    let data = {
      "mj_name_th": name_th,
      "mj_name_en": name_en,
      "mj_status": "Y",
      "mj_user_update": "55"
    }
    return this.http.post(this.url + "/tr_major",data).map((res) => res.json());
  }

  delete_major_data(mj_id:string){
    return this.http.delete(this.url + "/tr_major/" + mj_id).map((res) => res.json());
  }

  update_major_status(mj_id:string,mj_status:boolean){
    let data = {
      "mj_status": (mj_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/tr_major/" + mj_id,data).map((res) => res.json());
  }
  update_major_data(mj_id:string,mj_name_th:string,mj_name_en:string){
    let data = {
      "mj_name_th": mj_name_th,
      "mj_name_en": mj_name_en
    }
    return this.http.put(this.url + "/tr_major/update/" + mj_id,data).map((res) => res.json());
  }
}

