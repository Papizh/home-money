import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-cart',
  templateUrl: './bill-cart.component.html',
  styleUrls: ['./bill-cart.component.scss']
})
export class BillCartComponent implements OnInit {
  @Input() bill: Bill;
  @Input() currency: any;

  dolar: number;
  evro: number;

  constructor() {
  }

  ngOnInit() {
   const {rates} = this.currency;
   this.dolar = rates['USD'] * this.bill.value;
   this.evro = rates['EUR'] * this.bill.value;
  }
}
