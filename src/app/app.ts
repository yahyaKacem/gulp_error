import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "./home.component";
import {ProfileComponent} from "./setting.component";
@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [],
  selector: "my-app",
  templateUrl: "home.html",
})
@RouteConfig([
  {
    component: HomeComponent,
    name: "Home",
    path: "/home",
    useAsDefault: true,
  },
  {
    component: ProfileComponent,
    name: "Setting",
    path: "/setting",
  },
])
export class App {
  constructor() {
    this.name = "TS";
  }
}
