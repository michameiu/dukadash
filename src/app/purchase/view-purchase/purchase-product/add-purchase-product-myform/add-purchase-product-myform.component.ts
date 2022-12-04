import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-purchase-product-myform',
    templateUrl: './add-purchase-product-myform.component.html',
    styleUrls: ['./add-purchase-product-myform.component.scss']
})
export class AddPurchaseProductMyformComponent implements OnInit {

    formItems = options;


    postUrl: string = ""

    url: string = ""


    @Output()
    onAddedUpdate: EventEmitter<any> = new EventEmitter()

    @Input()
    extra_fields: any
    originalInstance: any
    //Required Fieds: buying_price, amount, selling_price, purchase, product
    //Other fields: active, paid, transaction_type, serial_numbers, quantity
    formGroupOrder = [
        ["product", "transaction_type"],
        ["buying_price", "selling_price"],
        ["paid"],
        ["quantity"],
        ["serial_numbers"]
    ]
    args = {}
    _instance: any
    isNew: any;

    @Input()
    set instance(value: any) {
        console.log(value)
        this._instance = value
    }

    get instance() {
        return this._instance
    }
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
    _shopId: string = ""

    @Input()
    set shopId(value: any) {
        this._shopId = value
        this.formItems.actions.POST.product.url = `api/v1/shops/${this.shopId}/products/`
    }
    get shopId() {
        return this._shopId
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
        console.log(this.url)
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
