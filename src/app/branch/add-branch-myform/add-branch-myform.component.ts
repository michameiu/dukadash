import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-branch-myform',
    templateUrl: './add-branch-myform.component.html',
    styleUrls: ['./add-branch-myform.component.scss']
})
export class AddBranchMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/shop-branches/"
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
            this.router.navigate(["branches", "list-branch"])
        }, 2000)
    }


}
