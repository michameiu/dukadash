import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit {

  instance: any;
  id: any;
  providedInstance: any;
  routeParamSub?: Subscription;
  routeSub?: Subscription;
  url: string = "";
  shopId: any;
  args: any = {};
  postUrl: string = "";
  selectedSaleProduct?: any;
  extra_fields: any;

  total_price = 0
  constructor(private route: ActivatedRoute, private router: Router) {
    this.routeParamSub = this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const instance = this.router.getCurrentNavigation()?.extras.state;
        if (instance?.hasOwnProperty("id")) {
          this.providedInstance = instance;
        }
      }
    });

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.url = `api/v1/sales/${this.id}/products`;
      this.postUrl = `api/v1/sales/${this.id}/products/`

      this.extra_fields = {
        postUrl: this.postUrl,
        updateUrl: "api/v1/sale-products/"
      }
    });
  }

  setIntance(instance: any) {
    console.log(instance);
    this.instance = instance;
    this.shopId = instance.shop
  }
  onAddedUpdate(added: any) {
    // this.args = {}
    // this.selectedSaleProduct = null
    window.location.reload();
  }

  onActions(action: any) {
    if (action.name.toLowerCase() == "edit") {
      this.selectedSaleProduct = action.data
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.routeParamSub?.unsubscribe();
  }
}
