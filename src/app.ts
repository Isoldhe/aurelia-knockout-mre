import { PLATFORM, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

@autoinject
export class App {
  public message = 'Hello World!';
  isVisible: KnockoutObservable<boolean>;
  firstName: string;
  lastName: string;

  constructor() {
    this.isVisible = ko.observable(false);
    this.firstName = "Jane";
    this.lastName = "Doe";
  }

  changeVisibility() {
    this.isVisible() == true ? this.isVisible(false) : this.isVisible(true);
  } 
}
