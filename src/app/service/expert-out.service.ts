import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable({
    providedIn: 'root'
})

export class ExpertOutService {

    private url: string = "http://localhost:3000";
    constructor(
        private http: Http
    ) { }

    get_all_expert_out_data() {
        return this.http.get(this.url + "/expert_out").map((res) => res.json());
    }

    update_expert_out_status(ep_id:string,ep_active:boolean){
        let data = {
          "ep_active": (ep_active == false ? "N" : "Y")
        }
        return this.http.put(this.url + "/expert_out/status/" + ep_id,data).map((res) => res.json());
      }

      update_expert_out_data(ep_id:string,ep_fname:string,ep_lname:string){
        let data = {
          "ep_fname": ep_fname,
          "ep_lname": ep_lname
        }
        return this.http.put(this.url + "/expert_out/update/" + ep_id,data).map((res) => res.json());
      }

      delete_expert_out_data(ep_id:string){
        return this.http.delete(this.url + "/expert_out/delete/" + ep_id).map((res) => res.json());
      }

      insert_expert_out_data(fname:string,lname:string){
        let data = {
          "ep_fname": fname,
          "ep_lname": lname,
          "ep_active": "Y",
          "ep_user_update": "60160180"
        }
        return this.http.post(this.url + "/expert_out/expert_out_insert",data).map((res) => res.json());
      }

}