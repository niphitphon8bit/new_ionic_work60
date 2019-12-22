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

  get_all_bank_data() {
    return this.http.get("http://localhost:3000/api/tr_bank").map((res) => res.json());
  }

}
