//our root app component
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {ProfileComponent} from './setting.component';

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: 'home.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/setting',
    name: 'Setting',
    component: ProfileComponent
  }
])
export class App {
  constructor() {
    this.name = 'TS'
  }
}
