import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS, APP_BASE_HREF} from "angular2/router";
import {App} from "./app";
import {provide} from "angular2/core";
bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: "/"})])
  .catch(err => console.error(err));
