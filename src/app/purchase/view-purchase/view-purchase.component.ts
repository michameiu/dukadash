import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.scss']
})
export class ViewPurchaseComponent implements OnInit {
  instance: any

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

  ngOnInit(): void {
  }

}
