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
      url: 'base/bank/bank_insert'
    },
    {
      name: 'Thai Army',
      status: 'true',
      url: 'base/bank/bank_insert'
    },
    {
      name: 'Krungthai',
      status: 'false',
      url: 'base/bank/bank_insert'
    }

  ];

  constructor() {

   }

  ngOnInit() {
  }

}
