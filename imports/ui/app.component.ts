import { Component } from '@angular/core'
import { template } from './app.template'
import Links from '../api/collections/Links';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  foo: string = 'Hello, angular meteor!'
  links: any[] = []

  ngOnInit() {
    Meteor.subscribe('links', () => {
      this.links = Links.find().fetch()
      console.log(this.links)
    })
  }

  constructor() {}
}
