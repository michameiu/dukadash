import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';
import { MutliStepForm, MyFormSection } from "@sisitech/myform"
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


    formSections: MyFormSection[] = [
        {
            title: "Customer Details",
            subTitle: "Include their full location",
            formGroupOrder: [
                ["name", "company"],
                ["phone", "customer_location"]
            ]
        },
        {
            title: "Sale Details",
            subTitle: "Include their full location",
            formGroupOrder: [
                ["branch", "transaction_type"],
                ["delivery_type", "date",]

            ]
        }
    ]


    multiStepForm: MutliStepForm = {
        url: this.url,
        options: options,

        submitButtonText: "Sale",
        forms: [
            {
                stepTitle: "Customer",
                sections: [this.formSections[0]],
            }, {
                stepTitle: "Sale",
                sections: [this.formSections[1]],
            }
        ]
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
