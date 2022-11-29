import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-purchase-myform',
    templateUrl: './add-purchase-myform.component.html',
    styleUrls: ['./add-purchase-myform.component.scss']
})
export class AddPurchaseMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/shop-branches/6/purchases/"
    extra_fields: any
    originalInstance: any

    //Required Fieds: transaction_type, branch
    //Other fields: active, name, vendor
    formGroupOrder = [
        ["branch", "name"],
        ["active", "transaction_type"],
        ["vendor", 'contact_name']
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
            this.url = `api/v1/shop-branches/${data.branch}/purchases/`
        } else {
            this.url = `api/v1/purchases/`
        }
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something
        setTimeout(() => {
            this.router.navigate(['purchases', 'view-purchase', data.id], { state: data });

            // this.router.navigate(['purchases', 'list-purchase'])
        }, 1300)
    }


}
