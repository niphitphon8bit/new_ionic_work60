import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
<<<<<<< HEAD
=======

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Injectable({
  providedIn: 'root'
})
export class MajorService {
<<<<<<< HEAD

=======
  
  private url:string = "http://localhost:3000";
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  constructor(
    private http: Http
  ) { }

  get_all_major_data() {
<<<<<<< HEAD
    return this.http.get("http://localhost:3000/api/tr_major").map((res) => res.json());
  }
}
=======
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

>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
