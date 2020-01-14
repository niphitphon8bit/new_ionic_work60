import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

  public banks = [
    {
      name: 'Kasikorn',
      status: 'true',
    },
    {
      name: 'Thai Army',
      status: 'true',
    },
    {
      name: 'Krungthai',
      status: 'false',
    },
    {
      name: 'Bangkok Bank',
      status: 'false',
    }

  ];


   ngOnInit() {
  }

   remove_bank(bank){
    let index = this.banks.indexOf(bank);
    if(index > -1){
      this.banks.splice(index,1);
    }
  }

}
