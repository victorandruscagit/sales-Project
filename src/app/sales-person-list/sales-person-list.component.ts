import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Claire', 'Bomb','clariai@gmail.com',800000),
    new SalesPerson('Vitalie', 'Bomb','sdsfd@gmail.com',600000),
    new SalesPerson('Marina', 'Idiot','cdfgdfgdfgdfgdfglariai@gmail.com',400000),
    new SalesPerson('Noidoi', 'Caramana','clasdfgsdfgsdfgsdriai@gmail.com',900000),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
