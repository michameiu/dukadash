import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filterOptions } from './filterOptions'
@Component({
  selector: 'app-lsit-sale-product',
  templateUrl: './list-sale-product-mytables.component.html',
  styleUrls: ['./list-sale-product-mytables.component.scss']
})
export class ListSaleProductMyTablesComponent implements OnInit {
  currentPage = 'class';
  rows = [];
  temp = [];
  total = 0;
  pageNumber = 0;
  searching: any;
  loader: any = false;
  enableDelete: boolean = true
  enableExport: boolean = true
  enableEdit: boolean = false
  pageSize: number = 10
  isValidationOnly = true

  @Input()
  total_price = 0

  formItems: any = filterOptions
  @Input()
  url?: string = ""

  stats_count = 0
  @Input()
  args = {}

  @Output()
  onActions: EventEmitter<any> = new EventEmitter()

  collapseFilters = false
  showNumbering = true
  //Required Fieds: selling_price, sale, product
  //Other fields: active, serial_numbers, quantity
  formGroupOrder = [

  ]

  // Remmber to pass it to the component
  headers = [
    'product_name', 'transaction_type_display', 'selling_price', { name: 'products_count', source: "stats.products_count" }, { name: 'total_price', source: "stats.total_price" }, { name: "Serials / Quantity", source: 'serials_quantity' }
  ]

  constructor(private route: Router) { }

  ngOnInit() {
  }
  async handleActions(action: any) {
    // if (action.name == "Edit") {
    //   const data = action.data;
    //   // id and name are what the multiselect expects for update
    // //   data.school = { id: data.school, name: data.school_name }
    //   await this.route.navigate(['sale-products','add-sale-product'], { state: data });
    // }
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
    this.url = "api/v1/sales/1/products"
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }
}
