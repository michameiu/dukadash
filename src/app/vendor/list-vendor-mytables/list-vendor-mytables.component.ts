import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { options } from '../add-vendor-myform/options';
import { filterOptions } from './filterOptions'
@Component({
  selector: 'app-lsit-vendor',
  templateUrl: './list-vendor-mytables.component.html',
  styleUrls: ['./list-vendor-mytables.component.scss']
})
export class ListVendorMyTablesComponent implements OnInit, OnDestroy {
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

  url?: string// = "api/v1/shops/4/vendors"
  instanceUrl = "api/v1/vendors"
  stats_count = 0
  args = {}

  collapseFilters = false
  showNumbering = true
  //Required Fieds: name, shop
  //Other fields: active, contact_name, contact_phone, contact_email
  formGroupOrder = [
  ]

  // Remmber to pass it to the component
  headers = [
    "shop_name", "name", "contact_name", "contact_phone", "contact_email"
  ]

  shopForm = new FormGroup({
    shop: new FormControl()
  })
  shopBranchOptions = options.actions.POST.shop
  shopSub?: Subscription

  constructor(private route: Router) { }
  ngOnDestroy(): void {
    this.shopSub?.unsubscribe()

  }

  ngOnInit() {
    this.shopSub = this.shopForm.valueChanges.subscribe(res => {
      this.url = `api/v1/shops/${res.shop}/vendors`
      this.args = {}
    })
  }
  async handleActions(action: any) {
    if (action.name == "Edit") {
      const data = action.data;
      // id and name are what the multiselect expects for update
      //   data.school = { id: data.school, name: data.school_name }
      await this.route.navigate(['vendors', 'add-vendor'], { state: data });
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
    this.url = "api/v1/shops/4/vendors"
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }
}
