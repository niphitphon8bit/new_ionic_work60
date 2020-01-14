import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankService {

<<<<<<< HEAD
=======
  private url: string = "http://localhost:3000";
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get_all_bank_base_data() {
    return this.http.get(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/get_all_bank_base`).map((res) => res.json());
  }

  get_all_bank_data() {
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/get_all").map((res) => res.json());
  }

  bank_delete(ba_id) {
    // console.log(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
    return this.http.delete(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/delete_bank/${ba_id}`)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );
  }

  bank_insert(bank: Object) {
    // console.log(bank["balance_name"])
    // let data = {
    //   'ba_balance_name': bank["balance_name"],
    //   'ba_bb_id': bank["name"],
    //   'ba_text': bank["text"],
    //   'ba_status': bank["status"]
    // };
    // var json_data = stringify(data);
    // console.log(json_data);
    let headers = {
      'Content-Type': 'application/json'
    };
    console.log(bank);
    return this.httpClient.post<any[]>(`http://localhost:3000/api/tr_bank/bank_insert`, bank, this.httpOptions)
      .subscribe(res => {
        console.log(res);
      }, (error: HttpErrorResponse) => {
        console.log(error.error);
      }
      );

  }

<<<<<<< HEAD
=======
  update_bank(ba_id: string, ba_balance_name: string, ba_name: string, ba_text: string) {
    let data = {
      "ba_balance_name": ba_balance_name,
      "ba_name": ba_name,
      "ba_text": ba_text
    }
    return this.http.put(this.url + "/bank/update/" + ba_id, data).map((res) => res.json());
  }

  update_bank_status(ba_id: string, ba_status: boolean) {
    let data = {
      "ba_status": (ba_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/bank/" + ba_id, data).map((res) => res.json());
  }
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
}
