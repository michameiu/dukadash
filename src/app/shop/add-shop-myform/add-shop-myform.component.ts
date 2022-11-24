import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';

@Component({
    selector: 'app-add-shop-myform',
    templateUrl: './add-shop-myform.component.html',
    styleUrls: ['./add-shop-myform.component.scss']
})
export class AddShopMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/shops/"
    extra_fields: any
    originalInstance: any

    //Required Fieds: name
    //Other fields: active, contact_name, contact_phone, contact_email, image, location
    formGroupOrder =  [
["name","active"],
["contact_name","contact_phone"],
["contact_email","image"],
["location"]
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

    preSendData(data:any) {
        data["HsPresave"] = true
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

  async onPostedData(data:any) {
        // Do something
        setTimeout(()=>{
            this.router.navigate(["../"])
        },2000)
    }


}
