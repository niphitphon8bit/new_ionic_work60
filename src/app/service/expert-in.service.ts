import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http } from '@angular/http'
=======
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
@Injectable({
  providedIn: 'root'
})
export class ExpertInService {
<<<<<<< HEAD


  constructor(
    private http: Http
  ) { }
  get_all_expert_in_data() {
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/get_expert_all").map((res) => res.json());
  }

  expert_in_delete(ba_id) {
    console.log(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
    return this.http.delete(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );
  }
  // upadate_expert_in_status(ep_id,ep_status) {
  //   return this.http.(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/update_status_expert_in/${ep_id}/${ep_status}`)
  // }
=======
  private url:string = "http://localhost:3000";
  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  get_all_expert_in_data() {
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/get_expert_all").map((res) => res.json());
  }
//delete expert_in by ep_id
  expert_in_delete(ep_id) {
    return this.http.delete(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/delete_expert_in/${ep_id}`)
  }

  
//update expert_in by ep_id 
  update_expert_in_status(ep_id:string,ep_active:boolean){
    let data = {
      "ep_active": (ep_active == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/api/tr_expert_in/updateStatus/" + ep_id,data).map((res) => res.json());
  }

//insert expert_in 
  expert_in_insert(expert: Object) {
 
    let headers = {
      'Content-Type': 'application/json'
    };
    console.log(expert);
    return this.httpClient.post<any[]>(`http://localhost:3000/api/tr_expert_in/expert_in_insert `, expert, this.httpOptions)
      .subscribe(res => {
        console.log(res);
      }, (error: HttpErrorResponse) => {
        console.log(error.error);
      }
      );

  }
  update_expert_in_data(ep_id:string,ep_fname:string,ep_lname:string){
    let data = {
      "ep_fname": ep_fname,
      "ep_lname": ep_lname
    }
    return this.http.put(this.url + "/expert_in/update/" + ep_id,data).map((res) => res.json());
  }
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b

}

