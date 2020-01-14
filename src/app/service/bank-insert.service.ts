import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class BankInsertService {

  constructor(
    private http: Http
  ) { }

  get_all_bank_base_data(){
    return this.http.get(`https://10.80.39.17/TSP60/Thepd-nu/index.php/tr/API/Ionic_bank/get_all_bank_base`).map((res) => res.json());
  }
}
