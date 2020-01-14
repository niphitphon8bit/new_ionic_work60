import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class ExpertInService {


  constructor(
    private http: Http
  ) { }
  get_all_expert_in_data() {
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/get_expert_all").map((res) => res.json());
  }

  expert_in_delete(ep_id) {
    console.log(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/delete_expert_in/${ep_id}`)
    return this.http.delete(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/delete_expert_in/${ep_id}`)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );
  }
  // upadate_expert_in_status(ep_id,ep_status) {
  //   return this.http.(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_expert_in/update_status_expert_in/${ep_id}/${ep_status}`)
  // }

}

