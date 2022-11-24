import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-product-myform',
    templateUrl: './add-product-myform.component.html',
    styleUrls: ['./add-product-myform.component.scss']
})
export class AddProductMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/products"
    extra_fields: any
    originalInstance: any
    isNew: any

    //Required Fieds: name
    //Other fields: active, require_serial_number, shop
    formGroupOrder = [
        ["shop", "name"],
        ["require_serial_number", "active"]
    ]
    args = {}
    instance: any;

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

    ngOnInit() {

    }

    preSendData(data: any) {
        data["HsPresave"] = true
        if (this.isNew) {
            this.url = `api/v1/shops/${data.shop}/products/`
        } else {
            this.url = `api/v1/product-configs/`
        }
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something
        setTimeout(() => {
            this.router.navigate(["products", "list-product"])
        }, 2000)
    }


}
