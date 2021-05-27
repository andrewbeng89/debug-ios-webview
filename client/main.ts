import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import 'zone.js'

import { AppModule } from '../imports/ui/app.module'

Meteor.startup(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error)
})
