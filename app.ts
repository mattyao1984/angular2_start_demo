/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/underscore/underscore.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello, {{ name }}.</h1><p>This is your {{ times }} AngularJS 2 app.</p>'
})

// Component controller
class MyAppComponent {
  name: string;
  times: string;

  constructor() {
    this.name = 'Matt Yao';
    this.times = 'first';
  }
}

bootstrap(MyAppComponent);
