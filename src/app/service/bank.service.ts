import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private http: Http
  ) { }

  get_all_bank_base_data() {
    return this.http.get(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/get_all_bank_base`).map((res) => res.json());
  }

  get_all_bank_data() {
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/get_all").map((res) => res.json());
  }

  bank_delete(ba_id) {
    console.log(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
    return this.http.delete(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );
  }

  bank_insert(bank: Object) {
    return this.http.post(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/bank_insert`, bank).subscribe(
      result => console.log(result),
      err => console.error(err)
    );;
  }

}
