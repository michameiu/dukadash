import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterOptions } from './filterOptions'
@Component({
  selector: 'app-lsit-sale',
  templateUrl: './list-sale-mytables.component.html',
  styleUrls: ['./list-sale-mytables.component.scss']
})
export class ListSaleMyTablesComponent implements OnInit {
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

  url?: string = "api/v1/sales"

  stats_count = 0
  args = {}

  collapseFilters = false
  showNumbering = true
  //Required Fieds: transaction_type
  //Other fields: active, name, company, date, phone, delivery_type, customer_location
  formGroupOrder = [
  ]

  // Remmber to pass it to the component
  headers = [
    "branch_name",
    "name",
    {
      name: "Transaction Type",
      source: "transaction_type_display"
    },
    {
      name: "Date",
      source: "created"
    },
    "total_price",

    // {
    //   name: 'View',
    //   type: "actions",
    //   data: [
    //     {
    //       name: "View"
    //     }
    //   ]
    // },
  ]

  constructor(private route: Router) { }

  ngOnInit() {
  }
  async handleActions(action: any) {
    const data = action.data;

    if (action.name == "Edit") {
      // id and name are what the multiselect expects for update
      //   data.school = { id: data.school, name: data.school_name }
      await this.route.navigate(['sales', 'add-sale'], { state: data });
    } else if (action.name.toLowerCase() == "view") {

      await this.route.navigate(['sales', 'view-sale', data.id], { state: data });

    }
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
    this.url = "api/v1/sales"
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }
}
