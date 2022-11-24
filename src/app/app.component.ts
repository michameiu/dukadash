import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthState, Logout } from '@sisitech/ngxs-auth';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store) {

  }

  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
  @Select(AuthState.full_name) profile$!: Observable<any>;
  title = 'dukadash';
  logout() {
    this.store.dispatch(new Logout())
  }
}
