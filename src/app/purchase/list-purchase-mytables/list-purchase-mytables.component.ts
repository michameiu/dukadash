import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filterOptions } from './filterOptions'
import { options } from '../add-purchase-myform/options'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lsit-purchase',
  templateUrl: './list-purchase-mytables.component.html',
  styleUrls: ['./list-purchase-mytables.component.scss']
})
export class ListPurchaseMyTablesComponent implements OnInit, OnDestroy {
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

  url?: string

  stats_count = 0
  args = {}

  instanceUrl = "api/v1/purchases"

  collapseFilters = false
  showNumbering = true
  //Required Fieds: transaction_type, branch
  //Other fields: active, name, vendor 
  formGroupOrder = [
  ]

  // Remmber to pass it to the component
  headers = [
    "branch_name",
    { source: "name", name: "Vendor Name" },
    {
      name: "Transaction Type",
      source: "transaction_type_display"
    },
    {
      name: "Date",
      source: "created"
    },
    {
      name: "products count",
      source: "stats.products_count"
    },
    {
      name: "sold_count",
      source: "stats.sold_count"
    },
    "total_price"
  ]

  shopBranchForm = new FormGroup({
    branch: new FormControl()
  })
  shopBranchOptions = { ...options.actions.POST.branch, display_name: "full_name" }
  shopSub?: Subscription
  constructor(private route: Router) {
  }
  ngOnDestroy(): void {
    this.shopSub?.unsubscribe()
  }
  ngOnInit() {
    this.shopSub = this.shopBranchForm.valueChanges.subscribe(res => {
      console.log(res)
      this.url = `api/v1/shop-branches/${res.branch}/purchases`
      this.args = {}
    })
  }
  async handleActions(action: any) {
    const data = action.data;
    console.log(action)
    if (action.name == "Edit") {
      // id and name are what the multiselect expects for update
      // data.branch = { id: data.branch, name: data.branch }
      await this.route.navigate(['purchases', 'add-purchase'], { state: data });
    } else if (action.name.toLowerCase() == "view") {

      await this.route.navigate(['purchases', 'view-purchase', data.id], { state: data });

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
    this.url = "api/v1/shop-branches/6/purchases"
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }
}
