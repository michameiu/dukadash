import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-sale-myform',
    templateUrl: './add-sale-myform.component.html',
    styleUrls: ['./add-sale-myform.component.scss']
})
export class AddSaleMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/sales/"
    extra_fields: any
    originalInstance: any

    //Required Fieds: transaction_type
    //Other fields: active, name, company, date, phone, delivery_type, customer_location
    formGroupOrder = [
        ["branch", "transaction_type"],
        ["name", "company"],
        ["date", "phone"],
        ["delivery_type", "customer_location"]
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
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something
        setTimeout(() => {
            this.router.navigate(['sales', 'view-sale', data.id], { state: data });
        }, 1300)
    }


}
