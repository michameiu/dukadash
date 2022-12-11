import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-sale-product-myform',
    templateUrl: './add-sale-product-myform.component.html',
    styleUrls: ['./add-sale-product-myform.component.scss']
})
export class AddSaleProductMyformComponent implements OnInit {

    formItems = options;
    url: string = "api/v1/sales/1/products/"

    @Input()
    extra_fields: any
    originalInstance: any

    //Required Fieds: selling_price, sale, product
    //Other fields: active, serial_numbers, quantity
    formGroupOrder = [
        ["product"],
        ["selling_price", 'transaction_type'],
        ["quantity"],
        ["serial_numbers"]
    ]
    args = {}
    _instance: any
    isNew: any;
    private _shopId: any;

    @Input()
    set instance(value: any) {
        console.log(value)
        this._instance = value
    }

    get instance() {
        return this._instance
    }
    @Output()
    onAddedUpdate: EventEmitter<any> = new EventEmitter()

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                const instance = this.router.getCurrentNavigation()?.extras.state;
                if (instance?.hasOwnProperty("id")) {
                    this.instance = instance
                }
            }
        })
    }
    @Input()
    set shopId(value: any) {
        this._shopId = value
        this.formItems.actions.POST.product.url = `api/v1/shops/${this.shopId}/products/`
    }
    get shopId() {
        return this._shopId
    }
    formChanges(form: any) {
        console.log(form)
        if (form.product) {
            this.formItems.actions.POST.serial_numbers.url = `api/v1/purchase-product-items?product_id=${form.product}`
            console.log(this.formItems.actions.POST.serial_numbers.url)
        }
        // this.formItems.actions.POST.quantity.show_only=""
    }

    ngOnInit() {

    }

    preSendData(data: any) {
        data["HsPresave"] = true
        if (this.isNew) {
            this.url = data.postUrl
        } else {
            this.url = data.updateUrl
        }
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something


        this.onAddedUpdate.emit(data)
    }


}
