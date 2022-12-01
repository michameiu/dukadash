import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filterOptions } from './filterOptions'
@Component({
  selector: 'app-lsit-purchase-product',
  templateUrl: './list-purchase-product-mytables.component.html',
  styleUrls: ['./list-purchase-product-mytables.component.scss']
})
export class ListPurchaseProductMyTablesComponent implements OnInit {
  currentPage = 'class';
  rows = [];
  temp = [];
  total = 0;
  pageNumber = 0;
  searching: any;
  loader: any = false;
  enableDelete: boolean = true
  enableExport: boolean = true
  enableEdit: boolean = true
  pageSize: number = 10
  isValidationOnly = true


  formItems: any = filterOptions

  @Input()
  url: string = ""

  stats_count = 0
  @Input()
  args = {}

  @Input()
  total_price = 0

  @Output()
  onActions: EventEmitter<any> = new EventEmitter()

  collapseFilters = false
  showNumbering = true
  //Required Fieds: buying_price, amount, selling_price, purchase, product
  //Other fields: active, paid, transaction_type, serial_numbers, quantity
  formGroupOrder = [
  ]

  // Remmber to pass it to the component
  headers = [
    'product_name', 'transaction_type_display', 'buying_price',
    {
      name: "products count",
      source: "stats.products_count"
    },
    {
      name: "sold_count",
      source: "stats.sold_count"
    },
    'products_count', 'total_price', 'serials_quantity'
  ]

  constructor(private route: Router) { }

  ngOnInit() {
  }
  async handleActions(action: any) {
    this.onActions.emit(action)
  }

  exportTriggerd(event: any) {
    this.route.navigate(['../reports/downloads']);
  }

  onValidatedData(data: any) {
    let ignoreFiltersForDecription = ["grouping", "paginator"]
    let parsedFilters: any = {}
    let descriptions = []
    for (let key in data) {
      const filterValue = data[key]
      if (!filterValue) continue
      if (typeof filterValue == "object") {
        if (filterValue.hasOwnProperty("value")) {
          parsedFilters[key] = filterValue.value
        }
        if (filterValue.hasOwnProperty("details")) {
          for (let index in filterValue.details) {
            const description = filterValue.details[index]
            if (description.hasOwnProperty("description")) {
              if (!ignoreFiltersForDecription.includes(key))
                descriptions.push(description.description)
            }
          }
        }
      } else {
        parsedFilters[key] = filterValue
        if (!ignoreFiltersForDecription.includes(key))
          descriptions.push(`${key}*${filterValue}`)
      }
    }
    if (descriptions.length > 0)
      parsedFilters["descriptions"] = descriptions.join("-")
    this.url = "api/v1/purchases/6/products"
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }
}
