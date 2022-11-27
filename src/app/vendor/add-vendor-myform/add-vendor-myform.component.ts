import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-vendor-myform',
    templateUrl: './add-vendor-myform.component.html',
    styleUrls: ['./add-vendor-myform.component.scss']
})
export class AddVendorMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/shops/4/vendors/"
    extra_fields: any
    originalInstance: any

    //Required Fieds: name, shop
    //Other fields: active, contact_name, contact_phone, contact_email
    formGroupOrder = [
        ["name", "shop"],
        ["active", "contact_name"],
        ["contact_phone", "contact_email"]
    ]
    args = {}
    instance: any;
    isNew: any;

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
            this.url = `api/v1/shops/${data.shop}/vendors/`
        } else {
            this.url = `api/v1/vendors/`
        }
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something
        setTimeout(() => {
            this.router.navigate(['vendors', 'list-vendor'])
        }, 1300)
    }


}
